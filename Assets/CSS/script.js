//Selects the questions element
var questionbox = document.querySelector(".questionCard");   

let header = document.getElementById("header")
header.textContent = "This is my question"
let p1 = document.getElementById("p1").innerHTML = "asfaf";

var next = questionbox.querySelector(".next");
var index = 0;
var currentQuestion;
var questions = [
        {
        question:"Who lost to the Bulls in the 90's finals?",
        answerEl: "Jazz",
        possibleChoices: "Kings", "Jazz", "Knicks"},
       
        {
        question:"Who was the best point guardin the 90's?",
        answerEl: "Stockton",
        possibleChoices: "Stockton", "Jordan", "Bibby"},
       
        {
        question:"What does NBA stand for?",
        answerEl: "National Basketball Assoc.",
        possibleChoices: "National Basketball Assoc." , "National Buckets Assoc", "National bucketball Assoc."},
       
        {
        question:"who is not a basketball player?",
        answerEl: "Depp",
        possibleChoices:"Noah", "Irving", "Depp"},
       
        {
        question:"What month is Allstar weekend?",
        answerEl: "Feb",
        possibleChoices:"June", "Sept", "Feb"},

        {
        question:"Who is the G.O.A.T?",
        answerEl: "Michael Jordan",
        possibleChoices:"Lebron James", "Magic Johnson", "Michael Jordan"}
    ];




    let questionCard= document.querySelector('.questionCard');
    questionCard.innerText= questions[0].question;



if (element.matches ("button")===true){
    var index= element.parentElement.getAttribute("date-index)");
}

answerEl.addEventListener("click", showResponse);
confirm //the correct answer to pop up