let Personne = function (nom, age, animal, nomAnimal) {
    this.nom = nom;
    this.age = age;
    this.animal = animal;
    this.nomAnimal = nomAnimal;

    this.nomAge = function (){
        return this.nom + " a " + this.age + " ans et possède un " + this.animal + " du nom de " + this.nomAnimal + ". ";
    }

    this.nomAni = function (nom, age){
        this.nom = nom ;
        this.age = age;
    }
};

let tableauClassique = [
    personne1 = new Personne('John', "12", "chien", 'pupuce'),
    personne2 = new Personne('Bidule', '8','hamster', 'truc'),
    personne3 = new Personne('Corona', "19", "virus", 'covid'),
    personne4 = new Personne('Jp', "40", "ane", 'Jerome'),
    personne5 = new Personne('Popo', "13", "chat", 'Amaury'),
];

let i = 0;

while(i < tableauClassique.length){
    let bebeDiv = document.createElement('div');
    document.body.appendChild(bebeDiv);
    bebeDiv.innerHTML = tableauClassique[i].nomAge() ;

    i++;
}