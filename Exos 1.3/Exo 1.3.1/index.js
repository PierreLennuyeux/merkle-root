function chiffreCesar(chaine, cle)
{
	var tabChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	chaine = chaine.split('');

	var test = [];

	for (var i = 0; i < chaine.length; i++) {
		test.push(tabChar.findIndex(element => element == chaine[i]));
	}

	chaine = [];

	for (var j = 0; j < test.length; j++) {
		chaine.push(tabChar[test[j]+cle]);
	}

	chaine = chaine.join('');
	console.log(chaine);

	return chaine;
}

chiffreCesar("abc", 3);