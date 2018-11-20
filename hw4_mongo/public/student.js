$(document).ready(function(){
  
  const url = "/server";
  const send = (func,Id,Name,Success)=>{
      $.ajax({
          method: "post",
          url: url,
          data:{
            func: func,
            studentId: Id,
            studentName: Name
          },
          success: Success
      });
  };
  
  const listSuccess = (data) => {
      console.log(data);
      var result=''; 
      for(var i=0;i<data.length;i++){
          result += '"'+ data[i].id + '":"'+data[i].name+'"<br>'; 
      }
       $("#listOutput").html(result);      
  };


  $("#listBtn").click((event)=>{
      event.preventDefault()

      $.ajax({
          method: "post",
          url: url,
          data: {
            func : "list",
            studentId: "ALL"
          },
          success: listSuccess
      }); 
   });
   
  const searchSuccess = (data)=> {
      var result='';
      for(var i=0;i<data.length;i++){
        result += '"Hello! '+data[i].name +'"<br>'; 
      }
      $("#searchOutput").html(result);
  };
  $("#searchBtn").click((event)=> {
      event.preventDefault()

        $.ajax({
            method: "POST",
            url: url,
            data: {
              func: "search",
              studentId: $("#searchStudent > input[name=studentId]").val()
            },
            success:searchSuccess
        });
  });

  const addSuccess = (data) => {
      send("list","ALL","",listSuccess);
  };
  
  $("#addBtn").click((event)=>{
      event.preventDefault()

        $.ajax({
            method: "POST",
            url: url,
            data: {
              func: "add",
              studentId: $("#addStudent > input[name=studentId]").val(),
              studentName: $("#addStudent > input[name=studentName]").val()
            },
            success:addSuccess
        });
  });
  
  const delSuccess = (data) => {
      send("list","ALL","",listSuccess);
  };
  
  $("#delBtn").click((event)=>{
    event.preventDefault()

      $.ajax({
          method: "POST",
          url: url,
          data: {
            func: "del",
            studentId: $("#delStudent > input[name=studentId]").val()
          },
          success:delSuccess
      });
  });

});
