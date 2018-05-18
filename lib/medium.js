
/**
 * Module dependencies.
 */

var request = require('superagent');
var reject = require('reject');

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

exports.getPublications = function(token, userId) {
  return function(fn) {
    request
      .get(uri + 'users/' + userId + '/publications')
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Charset', 'utf-8')
      .end(fn);
  }
}

/**
 * Publish a post.
 */

exports.publish = function(token, userId, post) {
  return function(fn) {
    let url = !!post.publicationID ? uri + '/publications/' + publicationID + '/posts' : uri + 'users/' + userId + '/posts';
    request
      .post(url)
      .send(clean(post))
      .set('Authorization', 'Bearer ' + token)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Charset', 'utf-8')
      .end(fn);
  };
}

/**
 * Remove unneeded attributes from `post`.
 */

function clean(post) {
  return reject({
    title: post.title,
    contentFormat: post.contentFormat,
    content: post.content,
    tags: post.tags,
    canonicalUrl: post.canonicalUrl,
    publishStatus: post.publishStatus,
    license: post.license
  });
}
