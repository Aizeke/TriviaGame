$(document).ready(function () {
    console.log(triviaGame);
    $('#gameStart').on('click', triviaGame.startGame);
    $(document).on("click", ".choices", triviaGame.evaluate);
})

var triviaGame = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    timer: 60,
    isTimerOn: false,
    question: "Who's That Pokemon!?<br>",
    //Selections an Array of objects with the questions and answers with their pictures.
    selection: [{
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    },
    {
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    },
    {
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    },
    {
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    },
    {
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    },
    {
        s1: ['Pikachu', 'Charmander', 'Sprite', 'Ditto'],
        answer: 0,
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-10/22/15/tmp/webdr04/94edab87db651f9b21a1d8d40d121648-0.jpg?downsize=700:*&output-format=auto&output-quality=auto'
    }],
    // Starts the Game and sets everthing to ZEROS and calls the timer function.
    startGame: function () {
        triviaGame.correct = 0;
        triviaGame.incorrect = 0;
        triviaGame.unanswered = 0;

        triviaGame.timer = 60;

        $('#gameStart').hide();

        if (!triviaGame.isTimerOn) {
            triviaGame.questions();
            triviaGame.isTimerOn = true;
        }
    },
    questions: function () {

        for (var i = 0; i < triviaGame.selection.length; i++) {

            $('#questionnaire').append(triviaGame.question);

            var pokeImg = $('<img class="pokeImg">');
            pokeImg.attr('src', triviaGame.selection[i].url);
            $('#questionnaire').append(pokeImg);

            for (var j = 0; j < triviaGame.selection[i].s1.length; j++) {
                qDiv = $('<button>');
                qDiv.addClass('choices');
                qDiv.attr('value', triviaGame.selection[i].answer);
                qDiv.text(triviaGame.selection[i].s1[j]);
                $('#questionnaire').append(qDiv);
            }
        }
        // starts the timer until reached 0
        triviaGame.timeoutID = setInterval(function () {
            $('#timer').html('Time Remaining: ' + triviaGame.timer-- + 'sec');

            if (triviaGame.timer < 0) {
                clearInterval(triviaGame.timeoutID);
                triviaGame.results();
            }
        }, 1000);
    },
    // checks to see if choice is correct
    evaluate: function() {
        if(this === answer){

        }
        console.log(this.val());

    },
    results: function () {

    }
}