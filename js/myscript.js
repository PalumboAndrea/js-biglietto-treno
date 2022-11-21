// Descrizione:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
//  L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let priceEveryKm = '0.21';

const kmToDo = prompt("Inserie i chilometri da percorrere");
console.log(kmToDo);
document.getElementById('km-to-do').innerHTML = 'Chilometri da effettuare: ' + kmToDo + 'km';

const age = prompt("Inserie l'età del passeggero");
console.log(age);
document.getElementById('age').innerHTML = 'Età: ' + age + ' anni';

let teensDiscount = 0.20;

let overDiscount = 0.40;







document.getElementById('price').innerHTML = 'Costo del biglietto: ' + kmToDo * priceEveryKm + '&euro;';
