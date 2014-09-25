'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CourseSchema = new Schema({
  course: String,
  credits: Number,
  grade: String
});

module.exports = mongoose.model('Course', CourseSchema);