//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

// 1. Creo costante per richiesta insierimento prima parola
const firstWord = prompt("inserisci una parola")
console.log(firstWord);

// 2. Creo costante per richiesta insierimento prima parola
const secondWord = prompt("inserisci una parola")
console.log(secondWord);

// 3. Creo ciclo per ottenere stampata in console la parola più lunga
if (firstWord > secondWord) {
    console.log(firstWord)
} else if (firstWord < secondWord) {
    console.log(secondWord)
}

