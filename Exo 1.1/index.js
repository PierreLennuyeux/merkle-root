const readline = require("readline");

let saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let nombreRandom = getRandomInt();

function reloadSaisie(nombreSaisie) {
	var resultat = (nombreSaisie < nombreRandom) ? (nombreRandom - nombreSaisie) : (nombreSaisie - nombreRandom);

	if(nombreSaisie != nombreRandom) {

		switch (true) {
			case (nombreSaisie < nombreRandom && resultat <=5):
				console.log("C'est un tout petit peu plus");
				break;
			case (nombreSaisie < nombreRandom && (resultat >= 6 && resultat <= 10)):
				console.log("C'est un peu plus");
				break;
			case (nombreSaisie < nombreRandom && resultat > 10):
				console.log("C'est beaucoup plus !");
				break;
			case (nombreSaisie > nombreRandom && resultat <=5):
				console.log("C'est un tout petit peu moins");
				break;
			case (nombreSaisie > nombreRandom && (resultat >= 6 && resultat <= 10)):
				console.log("C'est un peu moins");
				break;
			case (nombreSaisie > nombreRandom && resultat > 10):
				console.log("C'est beaucoup moins !");
				break;
			default:
				console.log("");
				break;
		}

		saisie.question("Réessayez : ", (reponse) => {
			reloadSaisie(reponse);
		});
		
	} else {
		console.log("Bravo, vous avez trouvé le nombre mystère");
		saisie.close();
	}
}

saisie.question("Devinez un nombre entre 1 et 100 : ", (answer) => {

	if (answer != nombreRandom)
    	reloadSaisie(answer);
    else
    	console.log("Vous avez trouvé le nombre du premier coup");
});