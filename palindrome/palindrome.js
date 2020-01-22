const readline = require("readline");

let saisie = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ReverseStr(str) 
{  
	return str.split('').reverse().join('');
}
    

function palindrome(saisie) {
	var palindrome = true;

    if (saisie.length <= 0) {

		return false;

    } else {

		saisie = saisie.trim();

		var chaine2 = ReverseStr(saisie);

		if (saisie != chaine2)
			palindrome = false;

		return palindrome;
    }
}

saisie.question("Saisissez un mot ou une phrase : ", (answer) => {
	
    var resultat = palindrome(answer);

    if (resultat)
    	console.log('La chaine de caractere est un palindrome');
    else
		console.log('La chaine de caractere n\'est pas un palindrome');

    saisie.close();
});