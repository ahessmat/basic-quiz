/////////////////////////////
// CODING CHALLENGE

//WORDS//
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

//STEP 1
var Question = function(text, options, answer){
    this.text = text;
    this.options = options;
    this.answer = answer;
}

//STEP 2
var q1 = new Question('Who is the good dog?', ['1) Roman','2) Sadie','3) Spike'], 1);
var q2 = new Question('What is our streetname?', ['1) Sarah','2) Molly','3) Diana', '4) Virginia'], 3);
var q3 = new Question('What food does Steph not like?', ['1) Chocolate', '2) Pasta', '3) Fishy fish'], 3);
var q4 = new Question('Asa loves Steph', ['1) TRUE', '2) FALSE'], 2);

//STEP 3
var quiz = [q1, q2, q3, q4]

//STEP 4
function nextQuestion(){
    return quiz[Math.round(Math.random() + 2)]; //will need to change based on # of questions: ...random() + n-1
};

var chosenQuestion = nextQuestion();
console.log(chosenQuestion.text);
for (var i = 0; i < chosenQuestion.options.length; i++) {
    console.log(chosenQuestion.options[i]);
}

//STEP 6
function isRight() {
    //STEP 5
    var userInput = prompt('The correct answer is: ');
    if (userInput == chosenQuestion.answer) {
        return 'Correct';
    } else {
        return 'FAIL';
    }
}
console.log(isRight());


nextQuestion();







