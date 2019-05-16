//invoking this as IIFE so it could be a plugin
(function () { 
    
//Create questions as objects
var Question = function(text, options, answer){
    this.text = text;
    this.options = options;
    this.answer = answer;
}

//Pregenerated questions
var q1 = new Question('Who is the good dog?', ['1) Roman','2) Sadie','3) Spike'], 1);
var q2 = new Question('What is our streetname?', ['1) Sarah','2) Molly','3) Diana', '4) Virginia'], 3);
var q3 = new Question('What food does Steph not like?', ['1) Chocolate', '2) Pasta', '3) Fishy fish'], 3);
var q4 = new Question('Asa loves Steph', ['1) TRUE', '2) FALSE'], 1);
   
//Other global variables    
var quiz = [q1, q2, q3, q4]
var correctAnswers = 0;
var keepPlaying = true;

//Function for picking a question from the quiz
function chooseQuestion(){
    //scales as new questions are added in the future
    return quiz[Math.floor(Math.random()*quiz.length)];
};

//Push a new question to the player  
function nextQuestion(){
    
    //Pick a new question, then output the question and options in console
    var chosenQuestion = chooseQuestion();
    console.log(chosenQuestion.text);
    for (var i = 0; i < chosenQuestion.options.length; i++) {
        console.log(chosenQuestion.options[i]);
    }
    
    //Allow the player to answer, return the score
    console.log(isRight());
    console.log('Your current score is: ' + correctAnswers);
    console.log('---------------------------');
    
    //Determine if player's answer is correct
    function isRight() {
        //Prompt the user for an answer
        var userInput = prompt('The correct answer is: ');
        //Return that answer is correct
        //Keep track of how many are correct
        if (userInput == chosenQuestion.answer) {
            correctAnswers++;
            return 'Correct';
        //Provide an option to terminate the quiz by typing 'exit'
        } else if (userInput == 'exit') {
            //terminate
            keepPlaying = false;
            return 'Successful exit';
        //Provide feedback to player if incorrect
        } else {
            return 'FAIL';
        }
    }  
}

//Keep playing the game until the player terminates the game
while (keepPlaying === true) {
    nextQuestion();
}
    
})(); //closing IIFE





