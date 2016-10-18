function Quiz() {

    //initially -> hide 'prevQ', 'nextQ', all radios. show 'start'

    //'start' -> generate 10 questions, hide 'start', 'restart'. show 'prevQ', 'nextQ', show first question

    //'next question' -> check if question is selected, save answer in glob arr, check if answer is right and add points



    //------------Private variables-------------------

    var questions = []; // all the questions
    var currentQuestion = 0;
    var points = 0;
    var userAnswers = [];

    var startBtn = document.getElementById('start');
    var restartBtn = document.getElementById('restart');
    var nextQuestion = document.getElementById('nextQuestion');
    var prevQuestion = document.getElementById('prevQuestion');

    var questionDiv = document.getElementById('question-wrap');
    var radios = document.getElementsByName('choices');

    var questionText = document.getElementById('questionText');
    var choice1 = document.getElementById('q1text');
    var choice2 = document.getElementById('q2text');
    var choice3 = document.getElementById('q3text');

    //-------------Public functions--------------------

    this.startQuiz = function () {
        //alert('Start quiz!');
        questionDiv.style.display = '';
        nextQuestion.style.display = '';
        prevQuestion.style.display = '';
        startBtn.style.display = 'none';

        currentQuestion = 1;

        setCurrentQuestion();
    };

    this.showWelcome = function () {
        //show the start button
        restartBtn.style.display = 'none';
        nextQuestion.style.display = 'none';
        prevQuestion.style.display = 'none';
        questionDiv.style.display = 'none';
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
            //console.log(JSON.stringify(questions, null, 2)); //TODO: debug
            this.setListeners();
            this.showWelcome();
        }).bind(this));
    };

    this.nextQuestion = function () {
        //check if the answer is right and set user's points

        if (!isAnswerSelected()) {
            alert("Please selected an answer");
            return;
        }

        if (currentQuestion === questions.length) {
            return;
        }


        setUserAnswer();
        currentQuestion += 1;
        setCurrentQuestion();
    };

    this.previousQuestion = function () {
        //get user's answer by question number

        if (currentQuestion === 1) {
            return;
        }

        currentQuestion -= 1;
        setCurrentQuestion();
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
        clearAllRadios();

        var current = questions[currentQuestion - 1];

        questionText.innerText = current.question;
        choice1.innerText = current.choices[0];
        choice2.innerText = current.choices[1];
        choice3.innerText = current.choices[2];
    };

    function isAnswerSelected () {
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked === true) {
                return true;
            }
        }
        return false;
    };

    function clearAllRadios () {
        for (var i = 0, length = radios.length; i < length; i++) {
            radios[i].checked = false;
        }
    };

    function setRadio (radioNum) {
        clearAllRadios();
        radios[radioNum].checked = true;
    };

    function getSelectedAnswer () {
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked === true) {
                return i;
            }
        }
        return -1;
    };

    function setUserAnswer () {
        userAnswers[currentQuestion] = getSelectedAnswer(); 
        console.log(userAnswers); //TODO: DEBUG
    }

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



quiz.init(); //make windows on load if necessary

//set listeners to buttons
