
/**
 * Module dependencies.
 */

var readdir = require('recursive-readdir');
var thunkify = require('thunkify-wrap');
var matter = require('gray-matter');
var logger = require('../logger');
var fs = require('co-fs-extra');
var path = require('path');
var resolve = path.resolve;

/**
 * Thunks.
 */

readdir = thunkify(readdir);

/**
 * Get articles from directory.
 */

exports.get = function*() {

  /**
   * Check to see if ./articles directory is there.
   */

  if (!resolve(process.cwd(), './articles')) {
    logger.fatal('Oh noes! `./articles` folder is missing.');
    process.exit(1);
  }

  /**
   * Get index.md files into array.
   */

  var articles = [];
  var files = yield readdir(resolve(process.cwd(), './articles'));

  // Read files.
  for (var i = 0; i < files.length; i++) {
    var file = {};
    var buffer = yield fs.readFile(files[i]);
    var parsed = matter(buffer.toString());
    file = parsed.data;
    file.content = parsed.content;
    file.contentFormat = 'markdown';
    if (!file.published) articles.push(file);
  }

  return articles;
};

/**
 * Add `published: true` to front-matter.
 */

exports.add = function(article) {
  // read entire file
  // insert `published: true` at the bottom of front-matter
  // overwrite entire file
};
