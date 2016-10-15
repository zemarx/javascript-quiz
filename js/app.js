function Quiz() {

    //------------Private variables-------------------

    var currentQuestion = 0;
    var points = 0;
    var userAnswers = [];

    //-------------Public functions--------------------

    //DEBUG FUNCTION
    this.printQuestionNum = function () {
        console.log(currentQuestion);
        privateFun();
    };

    this.nextQuestion = function () {

        //check if answer is selected
        //save users's answer
        //check if the answer is right and set user's points

        currentQuestion++;
    };

    this.previousQuestion = function () {
        //get user's answer by question number
        //
    };

    this.initQuiz = function () {
        currentQuestion = 0;
        points = 0;
    };

    this.restartQuiz = function () {
        // TODO:
    };

    //--------------Private functions------------------

    function setCurrentQuestion () {
        //get question from somewhere
        //set choices
    };

    function privateFun() {
        console.log("I am a private function: " + currentQuestion);
    };
};

var quiz = new Quiz();

//set listeners to buttons
