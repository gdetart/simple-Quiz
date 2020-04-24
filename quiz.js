const questions = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      answers: ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit','Central Processing Unit'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      answers: ['Static', 'Private','Final', 'Public'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      answers: ['True','False'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      answers: ['True','False'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      answers: ['.png', '.jpeg', '.gif','.svg'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      answers: ['Counter Strike: Source','Cascading Style Sheet', 'Corrective Style Sheet', 'Computer Style Sheet'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      answers: ['Ice Cream Sandwich', 'Jelly Bean','Nougat', 'Marshmallow'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      answers: ['140','120', '160', '100'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      answers: ['True','False'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      answers: ['Python', 'C','Java', 'Jakarta'],
    }]
let points = 0;
let targetAns="";
const startBtn = document.querySelector('#startQuiz')
let currentIndex
const questionContainer = document.querySelector('#questionContainer')
const nextQuestionID = document.querySelector('#nextQuestion')
const questionID = document.querySelector('#question')
const answersID = document.querySelector('#answerBtn') 
let randomIN;  
let p = document.getElementById('p')
window.onload = function() {
    showQuestion()
    

}

function showQuestion (){
    let randomIndex = Math.floor(Math.random() * questions.length)
    let randQuest = questions[randomIndex].question;
    let randAnsw = questions[randomIndex].answers;
    questionID.innerText = randQuest;
    answersID.innerHTML="";
    randAnsw.forEach(answer => {
        let button = document.createElement('input');
        button.setAttribute("type","button");
        button.value = answer;
        button.addEventListener('click',selectAnswers)
        button.className = "answers"
        answersID.appendChild(button)
        p.innerHTML = points;
    });
    return randomIN=randomIndex;
}
const selectAnswers = function (event){
    let target = event.target;
    targetAns = target.value;
    button = document.querySelectorAll('.answers')
    button.forEach(element => {
        element.className = element.className.replace(' new', '')
        
    });
    if(target) {
        target.className = target.className.replace(' new', '')
        }
    target.className += " new"
    return targetAns

}
function checkAnswer (){
     
   if (targetAns==questions[randomIN].correct_answer){
        points = points + 1;
        showQuestion();
        return points;
        
        }
        showQuestion();
    
    }








