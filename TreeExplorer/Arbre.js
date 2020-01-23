const Noeud = require("./Noeud");

class Arbre {
	constructor() {
		this.racine = undefined; 
	}

	ajouterNoeud(valeur) {
			if (valeur < this.valeur) {
				if (this.gauche === undefined) 
					{ 
						this._ajouterNoeud(new Noeud(valeur));

					} 
					else { 
						this.gauche.ajouterNoeud(valeur);
					}
			} else {
				if (this.droite === undefined) {
					this._ajouterNoeud(new Noeud(valeur));
				} else { 
					this.droite.ajouterNoeud(valeur);
				} 
			}
		}

		_ajouterNoeud(noeud) {
			if (noeud.valeur < this.valeur) {
				this.gauche = noeud; 
			} else {
				this.droite = noeud; 
			}
			noeud.parent = this; 
		}

		trouverNoeud(valeur) {
			if (this.valeur === valeur) {
				return this;
			} else if (valeur < this.valeur && this.gauche !== undefined) {
				return this.gauche.trouverNoeud(valeur);
			} else if (valeur >= this.valeur && this.droite !== undefined) {
				return this.droite.trouverNoeud(valeur); }
				return undefined;
			}
		afficher() {
			var out = "Noeud " + this.valeur + ": L";
			this.gauche === undefined ? out += "-" : out += this.gauche.valeur; out += " R";
			this.droite === undefined ? out += "-" : out += this.droite.valeur; out += " P";
			this.parent === undefined ? out += "-" : out += this.parent.valeur; console.log(out);

			if (this.gauche !== undefined) 
				this.gauche.afficher();

			if (this.droite !== undefined) 
				this.droite.afficher();
		}
}

module.exports = Arbre;