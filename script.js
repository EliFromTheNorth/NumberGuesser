/*Default*/
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/* Generate random secret number 1-9 */

const generateTarget  = () => {
  return Math.ceil(Math.random()*9);
  }

  

  /* Compare differences between secret number and computer´s and human´s guess */

const compareGuesses = (humanGuess, compGuess, secretTarget) => {
  const differenceHuman = Math.abs(secretTarget-humanGuess);
  const differenceComputer = Math.abs(secretTarget-compGuess);

     if (differenceHuman <= differenceComputer) {
      return true;
    } else if (differenceHuman > differenceComputer) {
      return false;
    }; 
}

//Test:
//secretTarget = generateTarget();
//console.log('Target is ' + secretTarget);
//console.log(compareGuesses(2,7,secretTarget));

const alert = humanGuess => {
  if (humanGuess > 9 || humanGuess < 0) { window.alert('You can choose only number between 0 and 9.')} 
}

/* Increasing winner´s score by 1 */
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++; 
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

/* Increasing round´s number after attempt */

const advanceRound = () => 
  currentRoundNumber++;
 




