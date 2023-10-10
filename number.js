console.log("*** WELCOME TO GUESS GAME ****");

const rand = Math.round(Math.random() * 100);
console.log(rand); // Bilgisayarin tuttugu rastgele sayi
let trial = 5;

while (trial > 0) {
	let guess = prompt("Guess the number ?");
	if (isNaN(guess)) {
		alert(
			`Please enter a number, not a string or floating number.\nRemaining guess : ${trial}`
		);
	} else {
		if (guess < rand) {
			alert(
				`Your number: ${guess}, INCREASE\nRemaining guess: ${trial - 1}`
			);
		} else if (guess > rand) {
			alert(
				`Your number: ${guess}, DECREASE\nRemaining guess: ${trial - 1}`
			);
		} else {
			console.log(`Tebrikler ${6 - trial}. denemede bildiniz. `);
			console.log(
				`Congratulations, you won!\nThe Number was: ${rand},\nYour guess: ${guess},\nPoint: ${
					trial * 20
				}`
			);
			break;
		}
		trial = trial - 1;
	}
}
if (trial === 0) {
	console.log(`You lost. The number was: ${rand}`);
}
