
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["answer1", "answer2", "answer3", "answer4", "answer5", "answer6", "answer7","answer8","answer9","answer10"];
    var marks=0;
    for(var i = 0; i < blanks.length; i++){
      var userInput = $("input:radio[name=" + blanks[i] + "]:checked").val();
      if(userInput==="right"){
        marks +=10;
        alert(marks);
        }
    }
    $("#result").text("your score is " + marks);
    event.preventDefault();
});
});
