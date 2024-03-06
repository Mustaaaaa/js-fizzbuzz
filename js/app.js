/*Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz” al post del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/



/* ciclo che stampi in console i numeri da 1 a 100 */
let n = 101;

for (let i = 1; i < n; ++i) {
	let num = i + 1
	

	/* Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero */
	const divElement = document.querySelector('.numeri');
	if ((i % 3 === 0) && (i % 5 === 0)) {

		console.log("fizzbuzz")

		divElement.innerHTML += `
		<div class="square bg-danger">${"FizzBuzz"}</div>
		`
	}
	/* per i multipli di 3 stampi “Fizz” al posto del numero*/
	else if (i % 3 === 0){
		console.log("fizz")
		divElement.innerHTML += `
		<div class="square bg-info">${"Fizz"}</div>
		`
	}
	/* per i multipli di 5 stampi “Buzz” al post del numero*/
	else if (i % 5 === 0){
		console.log("buzz")
		divElement.innerHTML += `
		<div class="square bg-warning">${"Buzz"}</div>
		`
	}
	/* per i numeri che non sono multipli di 5 e 3*/
	else {
		console.log(i)
		divElement.innerHTML += `
		<div class="square bg-primary">${i}</div>
		`
	}

}


