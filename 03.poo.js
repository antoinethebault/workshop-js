console.log("03 - Poo");

//classe Personne
class Personne {
    constructor(nom, prenom, pseudo) {
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
    }
    getNomComplet = function () {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    };
    getInitiales = function () {
        return this.prenom.charAt(0)+this.nom.charAt(0);
    }
}

//afficherPersonne
function afficherPersonne(personne){
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

//objets
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

//affichage
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

afficherPersonne(paul);

jules.pseudo = "jules44";
console.log("-> Modification du pseudo de jules : "+jules.getNomComplet());

//ajouter une propriété à Personne
console.log("-> Age de Jules : ")
console.log(jules.age);
Personne.prototype.age="NON RENSEIGNE";
console.log(jules.age);
jules.age=30;
console.log(jules.age);

//ajouter une méthode à Personne
console.log("-> Initiales de Jules : "+jules.getInitiales());

//objet sans fonction constructeur
var robert = new Personne();
robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";
robert.getNomComplet = function(){return robert.nom+" "+robert.prenom+" "+robert.pseudo};
afficherPersonne(robert);

//héritage via une fonction constructeur
class Client extends Personne{
    constructor(nom, prenom, pseudo, numeroClient){
        super(nom, prenom, pseudo);
        this.numeroClient = numeroClient;
    }
    getInfos = function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom;
    }
}

var steve = new Client ("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log("-> Numéro client de steve : "+steve.numeroClient);
console.log("-> Client steve : "+steve.getInfos());