'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: String,
  credits: Number,
  sign: String,
  value: Number
});

module.exports = mongoose.model('Course', CourseSchema);