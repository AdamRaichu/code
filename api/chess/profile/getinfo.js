function setActive(object) {
  window.userInfo = object
}

var search = location.search.substring(1);
var params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
var username = params.username

$.getScript("https://api.chess.com/pub/player/" + username + "?callback=setActive")