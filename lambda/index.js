var app = require('./the.js')('TestBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
