$(document).ready(function() {
  
  const send = (func,Id,Name,Success)=>{
      $.ajax({
          method: "post",
          url: "list.php",
          data:{
            func: func,
            studentId: Id,
            studentName: Name
          },
          success: Success
      });
  };
  
  const listSuccess = (data) => {
       $("#listOutput").html(data);      
  };


  $("#listBtn").click((event)=>{
      event.preventDefault()

      $.ajax({
          method: "post",
          url: "list.php",
          data: {
            func : "list",
            studentId: "ALL"
          },
          success: listSuccess
      }); 
   });
   
  const searchSuccess = (data)=> {
      $("#searchOutput").html(data);
  };
  $("#searchBtn").click((event)=> {
      event.preventDefault()

        $.ajax({
            method: "POST",
            url: "list.php",
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
            url: "list.php",
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
          url: "list.php",
          data: {
            func: "del",
            studentId: $("#delStudent > input[name=studentId]").val()
          },
          success:delSuccess
      });
  });
})
