
let winner = "";
// generate random number
function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// Pass random number 
let randomNumber1 = getRandomNumberBetween(1,6);
let randomNumber2 = getRandomNumberBetween(1,6);

// Dynemically set image element's src attribute.
const img1 = document.querySelector('.img1').setAttribute('src', `./images/dice${randomNumber1}.png`);
const img2 = document.querySelector('.img2').setAttribute('src', `./images/dice${randomNumber2}.png`);

//Compare random number and find winner
if(randomNumber1 > randomNumber2){
  winner = "Player 1 Wins!"
}else if(randomNumber1 === randomNumber2){
  winner = 'Draw!'; 
}else {
  winner = "Player 2 Wins!"
}

//Chane inner HTML of h1 tag according to winner.
const h1 = document.querySelector('h1').innerHTML = winner;