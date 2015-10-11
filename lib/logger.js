
var chalk = require('chalk');
var format = require('util').format;
var indent = require('indent');

/**
 * Log a message to the console.
 *
 * @param {String} args...
 */

exports.log = function(){
  log('log', arguments);
};

/**
 * Log an error message to the console and exit.
 *
 * @param {String} args...
 */

exports.fatal = function(err){
  if (err instanceof Error) {
    err = err.stack
      .replace(/\n/g, '\n        ')
      .replace(/\n$/, '\n\n');
  }

  log('error', arguments, 'red');
  process.exit(1);
};

/**
 * Log by `type` with `args`.
 *
 * @param {String} type
 * @param {Arguments} args
 * @param {String} color
 */

function log(type, args, color){
  pad();
  var msg = format.apply(format, args);
  if (color) msg = chalk[color](msg);
  var pre = prefix();
  console[type](pre, msg);
}

/**
 * Get the prefix, based on whether we've logged before.
 *
 * @return {String}
 */

var logged;

function prefix(){
  var pre = logged ? '         ' : chalk.white('  medium ');
  logged = true;
  return pre + chalk.gray('·');
}

/**
 * Pad the terminal if it hasn't been already.
 */

var padded;

function pad(){
  if (padded) return;
  console.log();
  process.on('exit', function(){ console.log(); });
  padded = true;
}
