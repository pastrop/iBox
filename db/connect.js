var mongoose = require('mongoose');
//var timestamps = require('mongoose-times'); //Placeholder for timestamp by mongoose-times

global.environment = 'test';

var env = require('./environment');
var config = require('./config');

mongoose.connect(config[env].url);