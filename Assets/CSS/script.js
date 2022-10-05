//Selects the questions element
var questionbox = document.querySelector(".questionCard");  
var currentQuestion 
var questionIndex = 0;
var points = 0
var timeLeftEl= document.getElementById("time-left")
var secondsLeft;
var choiceEl = document.getElementById("choices");
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
    spawnAnswers()
    setTime()

// this starts game/gets the question 
function init () {
    // get the current question object from the question array
    currentQuestion = questions[questionIndex];
 
    // update the with the current question
    var titleElement = document.getElementById("question");
    titleElement.textContent = currentQuestion.q;
    choiceEl.innerHTML = "";
    }
let answer

function spawnAnswers(){
    let choice_node
        currentQuestion.pA.forEach(function(pA){
        
            // create new button for each choice
            choice_node = document.createElement("button");    
            choice_node.setAttribute("class", "choices");
            choice_node.setAttribute("value", pA);
            choice_node.innerText=pA
            console.log("spawned...")
            choiceEl.appendChild(choice_node) 

            choice_node.addEventListener('click', ()=>{
                console.log("This was clicked")
                alert("the answer is " + currentQuestion.answerEl)
                questionClick()
            })
            
        })
            
}

function questionClick(){
    choiceEl.removeChild(choiceEl.firstChild)
    choiceEl.removeChild(choiceEl.firstChild)
    choiceEl.removeChild(choiceEl.firstChild)

    console.log("question click")
    questionIndex++;
    currentQuestion = questions[questionIndex];
    var titleElement = document.getElementById("question");
    titleElement.textContent = currentQuestion.q;
    spawnAnswers()
}

function checkAnswer(event) {
  
}

function setTime(){
   //This is my countdown timer
    secondsLeft= 60;
    var timerInterval= setInterval(function(){
    secondsLeft--;
    timeLeftEl.textContent= secondsLeft;
    if(secondsLeft==0){
    clearInterval(timerInterval);  
    }
        },1000);
}