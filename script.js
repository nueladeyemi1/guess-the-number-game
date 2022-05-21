'use strict';
let random;
let score = 20;
let highscore = 0;
random = Math.trunc(Math.random() * 20) + 1;



document.querySelector('.check').addEventListener('click', function(){
let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Please, input a number!';
    } else if (guess === random) {
        document.querySelector('.message').textContent = 'Hurrey! You guessed right, Congrat...!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = random;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > random){
        //for scores reduction
        if (score > 1) {
            document.querySelector('.message').textContent = 'Your guess is too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'Too bad! You lost the game, please Restart...!';
        }
        
    } else if (guess < random){ 
        //for scores reduction
        if (score > 1) {
            document.querySelector('.message').textContent = 'Your guess is too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'Too bad! You lost the game, please Restart...!';
        }
    }
   
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    random = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing...!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});

const array3 = ['Michael', 'James', 'Tony', 'Emmanuel', 'Tunde'];

for (let i = 0; i < array3.length; i++) {
    console.log(array3[i])
}

let num2 = 0;
while (num2 < 5) {
    console.log(num2);
    num2++; 
}

array3.forEach(function(i){
    console.log(i); 
})