
// FRONT-END LOGIC

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var answers = ["C", "A", "A", "A", "C", "B", "C", "A", "A", "A"],;

        $('.correct').each(function () {
            answers.push($(this).prop('checked'));
        })

        console.log(answers);


        $('#result').text("Your score is "+ getScore(answers));
    })
});

// BUSINESS LOGIC

function getScore(answers) {
    var score = 2;

    answers.forEach(function(answer) {
        if (answer === true) {
            score++;
        }
    });

    return score;
}