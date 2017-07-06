let FollowToggle = require('./follow_toggle.js');
let UsersSearch = require('./users_search.js');

$(() => {
  let $followButtons = $('.follow-toggle');
  let $searchBars = $('.users-search')
// $.each($followButtons, function(index, value) {
//   new FollowToggle(value);
// })
  for (let i = 0; i < $followButtons.length; i++) {
    new FollowToggle($followButtons.eq(i));
  }

  for (let i = 0; i < $searchBars.length; i++) {
    new UsersSearch($searchBars.eq(i));
  }



})
