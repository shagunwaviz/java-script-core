var submitAnswer = function() {

  var radios = document.getElementsByName('choice');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Scripting" ) {
    alert('Answer 1 is correct !');
  } else {
    alert('Answer 1 is wrong');
  }
  var radios = document.getElementsByName('choice1');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Programming" ) {
    alert('Answer 2 is correct !');
  } else {
    alert('Answer 2 is wrong');
  }
  
  var radios = document.getElementsByName('choice2');
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  
  if (val == "" ) {
    alert('please select choice answer');
  } else if ( val == "Country" ) {
    alert('Answer 3 is correct !');
  } else {
    alert('Answer 3 is wrong');
  }
};