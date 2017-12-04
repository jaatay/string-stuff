const questions = ['What is your name?' , 'What is your age?' , 'What is your favorite color?'];
const printThis = ['Hello, ' , 'Your age is: ' , 'Your favorite color is: '];
const answers = [];
let changeColor = document.getElementById('mainDiv');


for (let i = 0; i < questions.length; i++) {
  let answer = prompt(questions[i]);
  let answer2 = printThis[i];

  if(answer === null) {
    alert('Please try again, meathead!');
    break;
  }

  answers.push(answer);

  document.write(`<h2> ${answer2} ${answer} </h2>`);


}

changeColor.style.backgroundColor = answers[2];
