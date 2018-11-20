var fs = require('fs');
var {mongoose} = require('./db/mongoose');
var {Student} = require('./models/student');

var obj = JSON.parse(fs.readFileSync('students.json','utf-8'));

console.log(obj);


for(var prop in obj){
    var newStudent = new Student({
      id: prop,
      name: obj[prop]
    });

    newStudent.save().then((doc)=>{
        console.log(JSON.stringify(doc))
    },(e)=>{
        console.log('Unable to save file');
    });
}
