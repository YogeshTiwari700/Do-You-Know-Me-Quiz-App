var readlineSync= require("readline-sync");

var score=0;

var userAnswer = readlineSync.question("What is your name? ");
console.log("welcome "+ userAnswer,"I hope you know Yogesh Lets play some quiz by giving answer →→→ yes or no ")
console.log("-----")
var userAnswer1=readlineSync.question("Do you know Yogesh Tiwari ? please say →→→ yes or no ");
console.log("-----")
if (userAnswer1==="yes"){
console.log( "you entered "+userAnswer1,"you are right");
score=score+1

}else{
console.log("you are wrong")
score=score-1
}


console.log("yaa your score is: "+ score);
console.log("------")



function play(question,answer) {
var userAnswer2=readlineSync.question(question);

if (userAnswer2===answer) {
console.log("You are Right")
score=score+1

}else {
console.log("You are Wrong")
score=score-1
}
console.log("yaa your score is: "+ score);
console.log("-----")


}
var highScore = [ {
name: "yogesh",
score: "5"
},{
name: "Akash",
score: "4"
},
]


var questions =[{
question: "Am i living in Gwalior ? ",
answer: "yes"
} , {
question: "have i completed my graduation ? ",
answer: "yes"

},{
question: "Have i completed my trip of Kedarnath ? ",
answer: "yes"
},{
question: "Have i completed Hollywood webseries Money Heist ? ",
answer: "yes"
} ];

for(var i=0;i<questions.length; i++) {
var currentQuestion =  questions[i];
play(currentQuestion.question,currentQuestion.answer)

}
console.log("Check out the top scorer, if you would like be there ping me and sent screnshot I'll update it");

highScore.map(score => console.log(score.name, " : ", score.score))



