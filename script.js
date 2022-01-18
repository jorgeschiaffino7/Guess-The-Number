'use strict';

/*
console.log(document.querySelector('.message').textContent); // textContent (VEMOS EL CONTENIDO DEL SELECTOR)
// <p class="message">Start guessing...</p> seleccionamos con el querySelector

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent); // ahora es 🎉 Correct Number!'
*/

///////////////// Handling Click Events /////////////

const secretNumber = Math.trunc(Math.random() * 20 + 1); // con esto configuramos que los numeros esten entre 1 y 20.

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //reseteo del input
  // document.querySelector('input').value = ''; //reseteo del input
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value); /// usamos el NUMBER FUNCTION PARA CONVERTIR EL STRING VALUE A NUMBER. RECORDAR QUE SI NO PONEMOS NUMBER EL VALOR QUE NOS DEVOLVERA SERA UN STRING!!
  console.log(guess);

  // when there is no input
  if (!guess) {
    // if insert not number
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#3DB2FF';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🚀Too high!!' : '⚓Too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔪GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }
});
/*
  else if (guess > secretNumber) {
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⚓Too low!!';
      score--; // score-- =(score = score -1;)
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🔪GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }
  
});

/// ANOTHER WAY TO DO IT FROM TEACHER////////
/*
document.querySelector('.again').addEventListener('click', () => {
  const secretNumber = Math.trunc(Math.random() * 20 + 1); // con esto configuramos que los numeros esten entre 1 y 20.

   score = 20;


  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; //reseteo del input
});

*/
