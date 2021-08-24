const readline = require('readline');
const { resourceLimits } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fs = require('fs');


const allQuestions = {
  alias : "What's your name? Nicknames are also acceptable :) \n",
  activity : "What's an activity you like doing? \n",
  soundtrack : "What do you listen to while doing that? \n",
  meal : "Which meal is your favourite (eg: dinner, brunch, etc.) \n",
  food :  "What's your favourite thing to eat for that meal? \n" ,
  sport : "Which sport is your absolute favourite? \n",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at! \n"
};

let profile = {};


let  i =  0;  
const ask = function(callback = saveAnswer) {
  questions = Object.keys(allQuestions);
  if (i >= questions.length){
    const paragraph = `I go by ${profile.alias}! My fav activity is ${profile.activity}! While ${profile.activity}, I usually listen to ${profile.soundtrack}! My fav meal is ${profile.meal}! My fav food during ${profile.meal} is ${profile.food}! My fav sport is ${profile.sport}! My superpower is ${profile.superpower}!`;
    console.log(paragraph);
    rl.close();
    return paragraph;
  }
  rl.question(allQuestions[questions[i]], (answer) => {
    
    console.log(`Thank you for your valuable feedback: ${answer}`);
    callback(questions[i], answer);
    i++;
    ask();

  });
};



// saves answers to array
const saveAnswer = function(label, input){
  profile[label] = input;
  console.log(profile);
}


ask();

