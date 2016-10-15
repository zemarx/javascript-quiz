function Quiz() {

    //------------Private variables-------------------

    var currentQuestion = 0;

    //-------------Public functions--------------------

    //DEBUG FUNCTION
    this.printQuestionNum = function () {
        console.log(currentQuestion);
        privateFun();
    };

    this.nextQuestion = function () {
        currentQuestion++;
    };

    this.previousQuestion = function () {

    };

    this.startAgain = function () {

    };

    //--------------Private functions------------------

    function privateFun() {
        console.log("I am a private function: " + currentQuestion);
    };
};

var quiz = new Quiz();

//set listeners to buttons
