var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score=0;
var score2 = 5;

var userName = readlineSync.question('What is your name? ');
console.log(chalk.red('Welcome! ' + userName + ' to A quiz on 13 Reasons why?  '));
function play(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow(question))
  
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log('yes! you are right. ')
    score = score+1;
  }
    else{-+-
      console.log('oops! you are wrong. ')
      score = score-1;
    }
    console.log('And, your score is ', score);
    console.log('_____________')
}
var questions = [{question: 'What was the name of Clay jensens mom ',
answer: 'Lainie Jensen',}, {
  question: 'In which game Bryce walker was co-captain of team?  ' , answer: 'baseball',},{ question: 'In which state of USA Liberty high school was situated?  ', answer: 'california',},{ question: 'How many tapes did Hannah created ?  ',answer: '13',},{question: 'In which tape clay jensen was mentioned? ' ,answer: '11',},{ question: 'In which movie theater Hannah and clay used to work together? ', answer: 'Crestmont',}]
  for(var i=0; i< questions.length; i++){
    var curr = questions[i];
    play(curr.question,curr.answer);
  }
  var scores = [{ name: "Himanshu Shukla",
  scoreIs: 6,},{ name: "Abhinav",
  scoreIs: 5,}]
  for(var i=0;i<scores.length;i++){
    if(score > scores[i].scoreIs){
     console.log(chalk.red("Hey it Looks like you have done very well and your score can be in the list of High Scores. Send me a SS. I will update it."))
    }
  }
  console.log('your score is '+ score);
  console.log('Highest Score --> Himanshu shukla = 6')
  console.log('Second Highest Score - to be announced soon')
  