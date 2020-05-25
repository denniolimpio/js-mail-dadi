// chiedo all'utente di inserire la email

var emailUtente = prompt( " Inserici la tua email per accedere");
console.log( 'email inserita ' + emailUtente);

// array, lista email presenti in archivio
var emailRegistrate = ["dennis@gmail.com", "fabio@outlook.com", "cecilia@libero.it", "arcibaldo@yahoo.com"];

// variabile di controllo
var check = false;

// verifico che la mail inserita sia presente

for (var i = 0; i < emailRegistrate.length; i++) {

// condizione: La mail inserita dall'utente deve corrispondere ad una presente nell'elenco
    if (emailUtente === emailRegistrate[i]) {
      check = true;

    }
  }

  if(check) {
    // se la mail inserita è presente:
    console.log("Fantastico, la mail inserita è presente nel nostro elenco");
  }
  // altrimenti se la mail inserita non è presente:

   else {
    console.log ("La mail inserita non è presente nell'elenco");
  }
