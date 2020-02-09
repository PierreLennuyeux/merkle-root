function conversion(nombre)
{
	// conversion en Hexa
	var resultat = (nombre-0).toString(16);

	var tabHexa = resultat.split('');
	resultat = '0x';
	var lng = tabHexa.length;

	if (lng % 2 != 0) {
		tabHexa.unshift('0');
	}

	for (var i = 0; i < tabHexa.length; i = i + 2) {
		resultat = resultat + ' ' + tabHexa.slice(i, i+2);
		resultat = resultat.replace(/,/, '');
	}

	var tabBigEndian = resultat.split(' ');
	tabBigEndian.shift();
	tabBigEndian = tabBigEndian.reverse();
	//tabBigEndian.shift().sort();
	//var resultatBigEndian =  



	console.log(resultat);
	console.log(tabBigEndian);
	//console.log(tabHexa.length);
	//console.log(tabHexa);

	return resultat;
}

conversion(466321);