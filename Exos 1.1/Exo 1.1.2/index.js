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

saisie.question("Recherche par l'ordi d'un nombre entre 1 et 100 : ", (answer) => {
	var nombreRandom = 0;
	var nombreTableau = [];

	while(answer != nombreRandom) {
		nombreRandom = getRandomInt();
		if (nombreTableau.indexOf(nombreRandom) == -1) {
			nombreTableau.push(nombreRandom);
			console.log("Ma proposition est "+nombreRandom);
		}
	}
	
    console.log("La réponse était "+answer);
    saisie.close();
});
