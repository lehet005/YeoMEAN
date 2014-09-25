'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  credits: Number,
  grade: String,
  value: Number
});

module.exports = mongoose.model('Thing', ThingSchema);