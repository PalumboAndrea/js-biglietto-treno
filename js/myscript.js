// Descrizione:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    - va applicato uno sconto del 20% per i minorenni
//    - va applicato uno sconto del 40% per gli over 65.
//  L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


const kmToDo = parseInt(prompt("Inserie i chilometri da percorrere"));
console.log(kmToDo);
document.getElementById('km-to-do').innerHTML = 'Tratto da effettuare: ' + kmToDo + 'km;';

let sexType;

let sex = prompt("Inserie il sesso del passeggero/a (maschio o femmina)");
console.log(sex);
if (sex = "femmina"){
    sexType = "della passeggera"
} else {
    sexType = "del passeggero"
}

const age = parseInt(prompt("Inserie l'età del passeggero"));
console.log(age);
if (age <= 1){
    document.getElementById('age').innerHTML = 'Età ' + sexType + ': ' + age + ' anno;';
} else {
    document.getElementById('age').innerHTML = 'Età ' + sexType + ': ' + age + ' anni;';
}

let priceEveryKm = 0.21;

let teensDiscount = 0.20;

let overDiscount = 0.40;

let priceAfterDiscount;

if (age < 18){
    priceAfterDiscount = (priceEveryKm - (priceEveryKm * teensDiscount));
} else {
    priceAfterDiscount = (priceEveryKm - (priceEveryKm * overDiscount));
}

console.log(priceAfterDiscount);

document.getElementById('price').innerHTML = 'Costo del biglietto: ' + kmToDo * priceAfterDiscount.toFixed(4) + '&euro;';
