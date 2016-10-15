function Quiz() {

    //------------Private variables-------------------

    var questions = []; //arr of objects
    var currentQuestion = 0;
    var points = 0;
    var userAnswers = [];
    var answerSelected = false; // or do it like a function which return bool

    //-------------Public functions--------------------

    this.startQuiz = function () {
        console.log(JSON.stringify(questions, null, 2));
    };

    this.init = function () {
        getData('GET', 'data/quiz-data.json', (function (err, data){
            if (err) {
                throw err;
            }
            questions = data;
            this.startQuiz();
        }).bind(this));
    };

    this.nextQuestion = function () {
        //check if answer is selected -> else return
        //save users's answer
        //check if the answer is right and set user's points
        setCurrentQuestion();

        currentQuestion++;
    };

    this.previousQuestion = function () {
        //get user's answer by question number
        //
    };

    this.initQuiz = function (data) {
        currentQuestion = 0;
        points = 0;
    };

    this.restartQuiz = function () {
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
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            callback('Connection error', null);
        };

        request.send();
    };
};

var quiz = new Quiz();

quiz.init();

//set listeners to buttons
