const readline = require("readline");

let saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    

function factorisation(saisie) {
    if (saisie <= 0) {
	return 0;
    } else {
	var resultat = saisie;

	for (i=1; i<saisie; i++) {
	    resultat = resultat * i;
	}

	return resultat;
    }
}

saisie.question("Saisissez un entier positif ", (answer) => {
    var resultat = factorisation(answer);
    console.log('Le resultat factoriel est : '+resultat);

    saisie.close();
});
