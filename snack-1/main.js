// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// 1. creo costante per inserimento primo numero
const firstNumber = prompt("inserisci un numero")
console.log(firstNumber)

// 2. creo costante per inserimento primo numero
const secondNumber = prompt("inserisci un numero")
console.log(secondNumber)

const box = document.querySelector('.box');
console.log(box)

// 3. creo condizione e specifico il numero da mostrare, ovvero quello maggiore
if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
}