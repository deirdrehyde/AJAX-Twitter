let APIUtil = require('./api_util.js')

class FollowToggle {
  constructor (el, options) {
    this.$el = el;
    this.userId = this.$el.attr('data-user-id') || options.userId;
    this.followState = this.$el.attr('data-initial-state') === 'true' || options.followState;
    this.fetchSuccess = this.fetchSuccess.bind(this);
    this.fetchError = this.fetchError.bind(this);
    this.render = this.render.bind(this);
    this.render();
    this.handleClick();
  }

  render () {
    const txt = this.followState ? 'Unfollow' : 'Follow';
    this.$el.text(txt);
  }

  fetchSuccess () {
    this.followState = !this.followState;
    this.render();
  }

  fetchError () {
    console.log('Errrorrr');
  }

  handleClick () {
    // console.log(this.followState);
    this.$el.click((event) => {
      event.preventDefault();
      const state = this.followState ? 'unfollow' : 'follow'
      if (state === 'follow') {
        let request = APIUtil.followUser(this.userId);
        request.then(this.fetchSuccess, this.fetchError);
      } else {
        let request = APIUtil.unfollowUser(this.userId);
        request.then(this.fetchSuccess, this.fetchError);
      }
    });
  }


}

module.exports = FollowToggle;
// el = $(.follow-toggle)
