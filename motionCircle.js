var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var nameSubjects = ["subject1", "subject2", "subject3", "subject4", "subject5", "superSubject"];
var max = 5;
var min = 0;
function time(){
  var s = new Date();
  var seconds = s.getSeconds();
  return seconds;
}
box1.onclick = function() {
 var number=Math.random() * (max - min) + min;
 var roundedNumber =number.toFixed();
 alert("Вы выиграли: " + nameSubjects[roundedNumber]);
}
box2.onclick = function() {
  var seconds = time();
  var number = seconds % 6;
  alert("Вы выиграли: " + nameSubjects[number]);
}
box3.onclick = function() {
  var seconds = time();
  if (seconds>=25 && seconds<= 49){
    index = 3;
  }
  else if (seconds>=15 && seconds< 25){
    index = 2;
  }
  else if(seconds>=1 && seconds< 15){
    index = 1;
  }
  else if(seconds>=50 && seconds<= 55){
    index = 4;
  }
  else if(seconds>55 && seconds<= 58){
    index = 5;
  }
  else if(seconds>58 && seconds<= 60){
    index = 6;
  }
  alert("Вы выиграли: " + nameSubjects[index]);
}
box4.onclick = function() {
  alert("Вы выиграли: " + nameSubjects[5]);
}
box5.onclick = function() {
  var index = Math.random() * (max - min) + min;
  var number = 0;
  for(var i=0; i<index; i++){
    number += 5;
  }
  var currentNumber = number%6;
  alert("Вы выиграли: " + nameSubjects[currentNumber]);
}