var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    minlength: 9,
    maxlength: 20,
    trim: true
  },
  name:{
    type: String,
    required: true,
    maxlength: 20,
    trim: true
  }

});

var Student = mongoose.model('Student',studentSchema);

module.exports = {Student};


