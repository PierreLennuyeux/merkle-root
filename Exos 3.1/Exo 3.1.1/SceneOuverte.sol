pragma solidity ^0.4.18;

contract SceneOuverte {

    string[12] passagesArtistes;

    uint creneauxLibres = 12;
    uint enCours = 0;
    uint nbInsrits = 0;

  function sInscrire(string nomDArtiste) public {
      if(creneauxLibres>0)
      {
            passagesArtistes[12-creneauxLibres] = nomDArtiste;
            creneauxLibres = creneauxLibres - 1;
            nbInsrits = nbInsrits + 1;

      }
  }

  function passerArtisteSuivant() public returns (uint) {
      if (enCours < nbInsrits) {
          enCours = enCours + 1;
      }

      return enCours;
  }

  function artisteEnCours() public view returns (string) {
      if (enCours >= nbInsrits) {

          return "FIN";
      } else {
          return passagesArtistes[enCours];
      }

  }
}