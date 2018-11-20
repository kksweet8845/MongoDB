var express = require('express');
var {parse} = require('querystring');

var {mongoose} = require('./db/mongoose');
var {Student} = require('./models/student');

const port = 12222;


var app = express();

app.use(express.static('../public'));

app.post('/server',(req,res)=>{
  let body='';
  req.on('data',chunk=>{
      body+= chunk.toString();
  }).on('end',()=>{
      var data = parse(body);
      //console.log(data);
      parseQuest(data.func ,data.studentId ,data.studentName,res);
  });
  
});

app.listen(port,()=>{
  console.log(`Listening on Port: ${port}`);
});

var newStudent='';
function parseQuest(func,id,name,res){
  if(func == 'list' && id =='ALL'){
        Student.find().then((docs)=>{
            console.log(JSON.stringify(docs,undefined,2));
            res.send(docs);
        },(err)=>{
            console.log('Unable to fetch students');
        });
  }else if(func == 'search' && id != undefined){
        Student.find({
          id: id
        }).then((docs)=>{
            res.send(docs);
            console.log('Search section');
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log('Unable to search students')
        });
  }else if(func == 'add' && id != undefined && name != undefined){
        newStudent = new Student({
          id: id,
          name: name
        });

        newStudent.save().then((docs)=>{
          console.log('Added a data');
          console.log(docs);
          res.send(docs);
        },(e)=>{
          res.status(400).send(e);
        });
  }else if(func == 'del' && id != undefined){
        Student.deleteOne({
          id: id
        },(err,result)=>{
          if(err){
          return console.log('Unable to delte',err);
          }
          res.send();
          console.log(result);
        });
  }
}


