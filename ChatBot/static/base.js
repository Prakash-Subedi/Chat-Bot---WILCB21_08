var questionNum = 0;
var mt = '<strong>BOT:</strong><br>';
var divr = '<div class="request">';
var divi = '</div>' 												// keep count of question, used for IF condition.
var question = mt+'What is your id?';				  // first question


var output = document.getElementById('AutoMessage');                // store id="output" in output variable
output.innerHTML = question;

var mes = document.getElementById('request');



													// ouput first question

function bot() {
    var input = document.getElementById("mesbox").value;
    console.log(input);

    if (questionNum == 0) {
    mes.innerHTML = divr  + input + divi;// output response
    document.getElementById("mesbox").value = "";   		// clear text box
    question = mt+ 'how old are you?';			    	// load next question
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    mes.innerHTML = divr+ input +divi;
    document.getElementById("mesbox").value = "";
    question = mt+ 'where are you from?';
    setTimeout(timedQuestion, 2000);
    }
     else if (questionNum == 2) {
    mes.innerHTML = divr +  input+divi;
    document.getElementById("mesbox").value = "";
    question = mt+ 'is that good?';
    setTimeout(timedQuestion, 2000);
    }
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();                                                                                      // run bot function when enter key pressed
    questionNum++;                                                                      // increase questionNum count by 1
  }
   $(document).find('#chatBox').append(html);
      $(this).val('');
});