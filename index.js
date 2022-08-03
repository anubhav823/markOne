let rls = require('readline-sync')
  
let questionOne = {
  question : 'What is my name?',
  answer : 'Anubhav'
}
let questionTwo = {
  question : 'Where do I live?',
  answer : 'Pune'
}
let questionThree = {
  question : 'Where did I go to college? ',
  answer : 'KGEC'
}
let questionFour = {
  question : 'What do I love to eat?',
  answer : 'Chocolate'
}
let questionFive = {
  question : 'What physical activity do I love the most?',
  answer : 'Cycling'
}

let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

let score = 0;

let name ='';
function askName(){
  name = rls.question("What is your name? ")
}

function checkAns(){
  for(let ques of questions){
    let ans = rls.question(ques.question);
    if(ans === ques.answer){
      score++;
      console.log("Correct! Your score is now "+score);
    } else {
      console.log("Wrong! The correct answer was "+ques.answer);
    }
    console.log();
  }
  console.log("Your final score is "+score);
  if(score > 3){
    console.log("You know me pretty well, "+name);
  } else {
    console.log("Are we even friends, "+name+"?")
  }
}

askName()
checkAns()