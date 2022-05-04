//Generatore di "nomi cognomi" casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

// 1. creo una costante array per i nomi
const nomi = ["Martina", "Marco", "Luca", "Paolo"];
console.log(nomi);
// 2. creo una costante per l'estrazione casuale dei nomi
const randomNomi = Math.floor(Math.random() * 4) + 1;
let nomiEstratti = randomNomi;

// 3. creo una costante array per i cognomi
const cognomi = ["Rossi", "Verdi", "Gialli", "Blu"];
console.log(cognomi);
// 4. creo una costante per l'estrazione casuale dei cognomi
const randomCognomi = Math.floor(Math.random() * 4) + 1;
let cognomiEstratti = randomCognomi;

const estratto = nomiEstratti + cognomiEstratti;
console.log(estratto);
