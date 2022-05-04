//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

//1. creo una costante per inserire il numero
const numero = Number(prompt('inserisci un numero'));
console.log(numero)

// 2. creo un ciclo if per la stampa del numero dispari + 1
if (numero % 2 === 1){
    console.log(numero+1)
}