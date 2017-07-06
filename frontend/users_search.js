let APIUtil = require('./api_util.js')
let FollowToggle = require('./follow_toggle.js');


class UsersSearch {
  constructor (el) {
    this.$el = el;
    this.input = this.$el.find('input');
    this.ul = this.$el.find('ul');
    this.fetchSuccess = this.fetchSuccess.bind(this);
    this.handleInput();
  }

  fetchSuccess (array) {
    this.ul.empty();
    this.userArray = array;
    console.log(array);
    for (let i = 0; i < this.userArray.length; i++) {
      let url = `/users/${this.userArray[i].id}`
      let $button = $("<button class='follow-toggle'></button>")
      let followButton = new FollowToggle($button, {userId: this.userArray[i].id, followState: this.userArray[i].followed});
      let $li = $('<li></li>')
      let $link = $(`<a href='${url}'>${this.userArray[i].username}</a>`)
      $li.append($link)
      $li.append($button)
      this.ul.append($li)
    }
  }

  fetchError () {
    console.log('Errrorrr');
  }

  handleInput () {
    this.input.on('input', (event) => {
      console.log('input');
      let request = APIUtil.searchUsers(this.input.val());
      request.then(this.fetchSuccess, this.fetchError)
    })
  }

  renderResults () {

  }
}

module.exports = UsersSearch;
