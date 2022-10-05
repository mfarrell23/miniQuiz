//Selects the questions element
var questionbox = document.querySelector(".questionCard");  
var currentQuestion 
var questionIndex = 0;
var points = 0
var choiceEl = document.getElementById("choices");
var spawned = true
const questions = [
        {
        q:"Who lost to the Bulls in the 1997 finals?",
        answerEl: "Jazz",
        pA: ["Kings", "Jazz", "Knicks"]
        },
        {
        q:"Which team has the most consecutive rings?",
        answerEl: "Cetics",
        pA: ["Bulls", "Celtics", "Golden St."]
        },
       
        {
        q:"In what year was CP3, and D. Will drafted?",
        answerEl: "2005",
        pA: ["2005" , "2009", "2007"]
        },
       
        {
        q:"Who is not a basketball player?",
        answerEl: "Dante",
        pA:["Noah", "Ostertag", "Dante"]
        },
       
        {
        q:"What month is Allstar weekend?",
        answerEl: "Feb",
        pA:["June", "Feb", "Sept"]
        },

        {
        q:"Who is the G.O.A.T?",
        answerEl: "Michael Jordan",
        pA:["Lebron James", "Magic Johnson", "Michael Jordan"]
    }
    ];
        
    init()
    spawnAnswers(spawned)


answerEl.addEventListener("click", checkAnswer);
alert //the correct answer to pop up ..answerEl to be hidden until a pA is clicked

// this starts game/gets the question 
function init () {
    // get the current question object from the question array
    currentQuestion = questions[questionIndex];
 
    // update the with the current question
    var titleElement = document.getElementById("question");
    titleElement.textContent = currentQuestion.q;

    // clear out the questions div before we create the buttons via a forloop
    choiceEl.innerHTML = "";

    // var choiceNode3 = document.createElement("button");
    // choiceNode3.setAttribute("class", "choices");
    // choiceNode3.setAttribute("value", currentQuestion);
    // choiceNode3.innerText = currentQuestion.pA[0]
    // choiceEl.appendChild(choiceNode3)
    //let choice_node
    }

function spawnAnswers(spawned){

        currentQuestion.pA.forEach(function(pA, choice_node){
          
        if(spawned === true){
            // create new button for each choice
            choice_node = document.createElement("button");
            choice_node.setAttribute("class", "choices");
            choice_node.setAttribute("value", pA);
            choice_node.innerText=pA
            console.log("spawned...")
            choiceEl.appendChild(choice_node)
        }else{
            choice_node = document.getElementsByClassName("choices");
            choice_node.setAttribute("class", "choices");
            choice_node.setAttribute("value", pA);

            choice_node.innerText=pA
        }           
            choice_node.addEventListener("click", questionClick)
            // choiceNode.textContent = choice;
            // HUGE HINT: we will need a new function declared for the following code to run -  we are assigning a function to be executed when we click the button
            
        })
            
}

function questionClick(){
    // checkAnswer()

    console.log("question click")
    questionIndex++;
    currentQuestion = questions[questionIndex];
    var titleElement = document.getElementById("question");
    titleElement.textContent = currentQuestion.q;
    spawnAnswers(false)
}

// define questionClick(){} - this is the function that is going to handle the logic for the button click - what happens when we click the button? We want to check if what I clicked and its value (hint: event.target) is the same as what is in questions.answerEl 

function checkAnswer() {
    // called by the event listener
    // show correct answer
    // update score (if they got it right, score++)
    // load next question
    currentQuestion
    questionEl.innerHTML = questions[currentQuestion].q
}
