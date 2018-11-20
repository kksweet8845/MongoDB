<?php
$stdId = $_POST["studentId"];
$stdName = $_POST["studentName"];
$method = $_POST["func"];


$file = file_get_contents("student.json");
$content = json_decode($file,true);

if($method == "list" && $stdId == "ALL"){
    foreach($content as $key => $value){
        $json_string .= "\""."$key"."\"".":"."\""."$value"."\""."<br>";
    }
    echo $json_string;
}else if($method == "add" && $stdId != ""){   
    $content["$stdId"] = "$stdName";
    file_put_contents("student.json",json_encode($content));
       
    echo "Success";
}else if($method == "del" && $stdId != ""){
  foreach($content as $key => $value){
    if($key == $stdId){
        unset($content["$stdId"]);
        break;
      }
  }
  echo "$j";
  file_put_contents("student.json",json_encode($content));

}else if($method == "search" && $stdId != ""){
  foreach($content as $key => $value){
    if($key == $stdId){
      $match = $value;
      break;
    }
  }
echo "Hello ,"."$match";  

}

?>
