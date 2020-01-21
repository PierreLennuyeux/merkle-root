exports.convertDecimal = function(nbre) { 
	resultat = parseInt(nbre,16);
	return resultat;
};

exports.convertHexa = function(nbre) {
	resultat = (nbre-0).toString(16);
	return resultat;
 };