// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

//1. creo costante per risultato
const totale = 0

// 2. creo ciclo for per ripetere l'operazione n volte
for (i = 0; i <= 2; i++){
// 3. Creo variabile dove inserire i numeri da sommare
    const numero = Number(prompt("Inserisci un numero"))
// 4. calcolo il risultato.
    totale += numero
}
// 5. scrivo risultato in console.
console.log(totale);