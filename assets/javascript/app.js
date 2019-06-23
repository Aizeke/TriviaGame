$(document).ready(function () {

    $('#gameStart').on('click', triviaGame.startGame());

    var triviaGame = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        timer: 60,
        timeoutID: '',
        isTimerOn: false,
        questions: {
            q1: "Place holder 1",
            q2: "Place holder 2"
        },
        answers: {
            a1: 'placeHolder1',
            a2: 'palceHolder2'
        },
        selection: {
            s1: ['bla', 'beep', 'boop'],
            s2: ['shogun', 'viking', 'warriors']
        },
        startGame: function () {
            triviaGame.correct = 0;
            triviaGame.incorrect = 0;
            triviaGame.unanswered = 0;

            triviaGame.startTimer();

        },
        guesses: function () {

        },
        results: function () {
            triviaGame.timer -= 1;
            if (triviaGame.timer < 0) {
                clearInterval(triviaGame.timer);
            }
            $('#timer').text(triviaGame.timer + 'sec');
        },
        startTimer: function () {
            triviaGame.timeoutID = setTimeout(triviaGame.results(), 1000);

        }
    }
})