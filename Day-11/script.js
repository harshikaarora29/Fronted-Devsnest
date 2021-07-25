const quizDB =[
    {
       question: "Q1: HTML stands for -",
a:	"HighText Machine Language",
b:	"HyperText and links Markup Language",
c:	"HyperText Markup Language",
d:	"None of these",
ans: "ans3"
    },

    {
        question: "Q2:  Which of the following element is responsible for making the text bold in HTML?   ",
         a:	"<pre>",
         b:	"	<a>",
         c:	"<b>",
         d:	"<br>",
            ans: "ans3"
     },

     {
        question: "Q3:Which of the following tag is used to insert a line-break in HTML? ",
        a:	"<br>",
        b:	"<a>",
        c:	"<pre>",
         d:	"<b>",
        
         ans: "ans1"
     },
     {
        question: "Q4:) How to create an unordered list (a list with the list items in bullets) in HTML? ",
        a:	"<ul>",
         b:	"<ol>",
        c:	"<li>",
        d:	"<i>",
         ans: "ans1"
     }
    
];

const question = document.querySelector('.que');
const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const op3 = document.querySelector('#op3');
const op4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');
const answers = document.querySelector('.answer');
const showScore = document.querySelector('#showScore');

let quecount = 0;
let score = 0;
const loadQue = () => {
    const quelist = quizDB[quecount];
    question.innerText = quelist.question;
    op1.innerText = quelist.a;
    op2.innerText = quelist.b;
    op3.innerText = quelist.c;
    op4.innerText = quelist.d;
}
loadQue();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};
const deselectall = () =>{
    answers.forEACH((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAns = getCheckAnswer();
    console.log(checkedAns);
    if(checkedAns === quizDB[quecount].ans){
        score++;
    };
    quecount++;
    deselectall();
    if(quecount < quizDB.length ){
        loadQue();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclicl="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
