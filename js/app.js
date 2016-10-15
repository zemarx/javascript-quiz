function Quiz() {

    //------------Private variables-------------------

    var questions = []; //arr of objects
    var currentQuestion = 0;
    var points = 0;
    var userAnswers = [];
    var answerSelected = false; // or do it like a function which return bool

    var startBtn = document.getElementById('start');
    var restartBtn = document.getElementById('restart');
    var nextQuestion = document.getElementById('nextQuestion');
    var prevQuestion = document.getElementById('prevQuestion');

    //-------------Public functions--------------------

    this.startQuiz = function () {
        alert('Start quiz!');
    };

    this.showWelcome = function () {
        //show the start button
    };

    this.setListeners = function () {
        startBtn.addEventListener('click', () => this.startQuiz());
        restartBtn.addEventListener('click', () => this.restartQuiz());
        nextQuestion.addEventListener('click', () => this.nextQuestion());
        prevQuestion.addEventListener('click', () => this.previousQuestion());
    };

    this.init = function () {
        getData('GET', 'data/quiz-data.json', (function (err, data){
            if (err) {
                throw err;
            }
            questions = data;
            console.log(JSON.stringify(questions, null, 2)); //TODO: debug
            this.setListeners();
            this.showWelcome();
        }).bind(this));
    };

    this.nextQuestion = function () {
        alert('Next question!');
        //check if answer is selected -> else return
        //save users's answer
        //check if the answer is right and set user's points
        setCurrentQuestion();

        currentQuestion++;
    };

    this.previousQuestion = function () {
        alert('Previous question!');
        //get user's answer by question number
        //
    };

    this.initQuiz = function (data) {
        currentQuestion = 0;
        points = 0;
    };

    this.restartQuiz = function () {
        alert('Restart quiz!');
        // TODO:
    };

    //--------------Private functions------------------

    function setCurrentQuestion () {
        //clear radio buttons
        //get question from somewhere by "currentQuestion"
        //set choices
    };

    function getData(method, url, callback) {
        var request = new XMLHttpRequest();
        request.open(method, url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                callback(null, data);
            } else {
                // Server reached, but it returned an error
            }
        };

        request.onerror = function() {
            callback('Connection error', null);
        };

        request.send();
    };
};

var quiz = new Quiz();

quiz.init();

//set listeners to buttons
