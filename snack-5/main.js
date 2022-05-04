//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
 

//1. Creo costante per array vuoto
 const array = []

//2. Creo ciclo for per permettere inserimento del numero da parte dell'utente n volte.
for (i = 0; i <= 6; i++){
    //3. creo costante per inserimento numeri
    const numero = Number(prompt("inserisci un numero"))
    if (numero % 2 === 1){
        //4. stampo numeri dispari in variabile array
        array.push(numero);
    }
}
// 5. visualizzo numeri dispari su console.
console.log(array)
