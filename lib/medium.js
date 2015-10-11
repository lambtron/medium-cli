
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Const.
 */

var uri = 'https://api.medium.com/v1/';

/**
 * Get `userId`.
 */

exports.userId = function(token) {
  return function(fn) {
    request
      .get(uri + 'me')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Charset', 'utf-8')
      .end(fn);
  };
}

/**
 * Publish a post.
 */

exports.publish = function(token, userId, post) {
  return function(fn) {
    request
      .post(uri + 'users/' + userId + '/posts')
      .send(post)
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Charset', 'utf-8')
      .end(fn);
  };
}
