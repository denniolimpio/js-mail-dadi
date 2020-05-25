// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('dado computer: ' + computerNumber);
var playerNumber = Math.floor(Math.random() * 6) + 1;
console.log('dado giocatore: ' + playerNumber);

//variabile di controllo
var vincitore = false;


if (computerNumber > playerNumber) {

  vincitore = true;
  alert( 'ha vinto il computer');


} else if (computerNumber < playerNumber)  {

  vincitore = false;
  alert( 'ha vinto il giocatore ')

}  else  {
  alert (' pari');
}
