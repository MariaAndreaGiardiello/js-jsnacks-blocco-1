//Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

// 1. creo costante per array che conterrà i numeri interi
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// 2. creo variabile per effettuare la somma
let somma = 0;

// 3. creo ciclo per estrapolare i numeri in posizione dispari ed effettuo la somma di tali numeri
for ( i = 0; i < 10; i++) {
    console.log(numbers[i])
    if (i % 2 === 1) {
        somma = i + i;
        console.log(somma)
    }
}

// . creo costante per il risultato da visualizzare
