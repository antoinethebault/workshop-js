console.log("02 - Tableaux");

var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

//forEach()
villes.forEach(element => console.log(element));

//every()
var containsA = (value) => value.indexOf("a") != -1;
console.log("lettreADansToutesLesVilles = "+villes.every(containsA));

//some()
var containsTiret = (value) => value.indexOf("-") != -1;
console.log("auMoinsUneVilleAvecUnTiret = "+villes.some(containsTiret));

//filter()
var villesSansTiretSansEspace = villes.filter(word => (word.indexOf(" ") == -1 && word.indexOf("-") == -1));
console.log("villesSansTiretSansEspace = ["+villesSansTiretSansEspace+"]");

//chainer les fonctions
var villesMajusculeSeTerminantParS = new Array();
villes.forEach(function(item, index, array){
    if (item.endsWith("s")){
        villesMajusculeSeTerminantParS.push(item.toUpperCase());
    }
})
console.log("villesMajusculeSeTerminantParS = ["+villesMajusculeSeTerminantParS+"]");
