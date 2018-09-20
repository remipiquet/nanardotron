/*---------------------------------------------------*/
/*------------------Jeux de données------------------*/
/*---------------------------------------------------*/

// Premier jeu de données

// Nom et prénom du héro
var nom = ["Robert Jacquie", "Le cousin par alliance de Peter Parker", "Coco le petit singe", "Albert, le cinquième mousquetaire", "Patrick l'étoile de mer", "Georges le poulpe", "Régis Dugenou ", ];

// Attribut ou métier du héro
var attribut = ["un flic de quartier super sympa", "un adolescent boutonneux quelconque", "un membre du Front de Libération des Nains de Jardin", "un éleveur de castors en Dordogne", "un agent d'accueil au Pôle Emploi de Pontivy", "un alcoolique notoire", "un thanatopracteur dévoué à son métier", ];

// Occupation ou hobbie du héro
var metier = ["aime les spaguettis aldente", "est passionné de scrapbooking", "joue trop bien du biniou","milite pour le rétablissement de la peine de mort", "essaie de devenir pro-player à Candy Crush", "est passionné de philatélie", "adore regarder les gens sur le quai de la gare", ];

// Background évenement 1
var evenement1 = ["a gagné un tournois de ping-pong au collège", "a eu une opération de l'appendicite lorsqu'il avait 6 ans", "a eu son brevet des collèges à 32 ans", "a raté 6 fois son permis de conduire", "a perdu son chien dans un accident de baignoire", "a rayé le camping car de son voisin", "a vomi un jambon beurre l'autre jour", ];

// Background évenement 2
var evenement2 = ["cassé trois pattes à un canard", "été se promener au parc ce matin", "mangé un kebab pas top", "rendu visite à sa vieille tante par acquis de conscience", "vu un hérisson écrasé sur le bord de la route", "mangé une pomme", "dormi chez sa soeur", ];

// Nom du méchant
var mechant = ["le frère de Dark Vador", "Mega Destructor", "Adolf Ben Ladden", "Alfred Legroscon", "Keyser Söze", "le Bouffon vert-jaune-rouge", "le Docteur Denfer", ];

// Occupation du méchant
var occupation = ["gardien de prison à la retraite", "banquier d'affaires", "méchant terroriste", "controleur fiscal verreux", "installateur de compteurs linky", "pervenche zélé", "agent d'accueil au service des cartes grises de la Préfecture", ];

// but du méchant
var but = ["buter tous les pingouins sur la banquise", "lancer une bombe nucléaire sur Tourcoing", "crever les pneus de toutes les voitures dans sa rue", "faire peur aux gens avec un masque de clown", "tondre son gazon le dimanche pour faire chier les voisins", "ne pas faire le tri sélectif", "continuer à rouler à 90 sur les routes", ];

// Copain du méchant
var perso2 = ["la copine du frère du voisin d'à côté", "un mec qui passait par là", "Francis Lalanne", "son fidèle teckel de compagnie", "Joli Sauteur, son fidèle destrier", "Bernard l'hermite", "Simba, le roi lion", ];

// Action pour gagner
var action = ["jouer à la Belote", "retrouver le chat de la mère Michelle", "gagner un coucours de Guitar Hero dans les Cévennes", "retrouver son portable qu'il a perdu en soirée le weekend dernier", "sauver le monde", "mettre un nouveau rouleau de PQ dans les toilettes", "se rappeler au dernier moment de l'anniversaire de sa femme", ];

// Handicap du héro
var handicap = ["son aputation des mains il y a trois jours", "son pied beau", "son syndrome de la Tourette", "son aérophagie chronique", "son lacet défait", "le fait qu'il ai mit son pantalon à l'envers", "sa braguette ouverte", ];


// Second jeu de données


// Bout de citation 1
var debut = ["Une tourterelle morte", "Un castor à lunette", "Une tranche de pain de mie", "Un morceau de chocolat écrasé", "Une paire de lunettes trop moches", ];

// Bout de citation 2
var milieu = ["quand ça sent pas bon", "tôt le matin", "une fois dans la vraie vie", "qu'est ce que je disais déjà ? ah oui", "heu...", ];

// Bout de citation 3
var fin = ["c'est super", "j'adore", "j'aime pas trop beaucoup ça", "ça n'a ni queue ni tête", "ça rox à mort", ];


/*---------------------------------------------------*/
/*-----------------Choix type citation---------------*/
/*---------------------------------------------------*/

// récupération du bouton radio type de citation
function typeCitation() {
    var typeCit;
    //Si le bouton "Synopsis de Nanard" est coché, renvoie la valeur 1
        if (document.getElementById("typeCitation1").checked) {
            return 1; 
        }   
    //Si le bouton "Citation pourrie" est coché, renvoie la valeur 2
        else if (document.getElementById("typeCitation2").checked) {      
            return 2; 
        }      
}


/*---------------------------------------------------*/
/*----------------Choix nombre citation--------------*/
/*---------------------------------------------------*/

//récupération du bouton radio Nombre de synopsis
function getNombreCitation() {
    var nbCit;
    //Renvoie la valeur de 1 à 5 cochée par l'utilisateur
        if (document.getElementById("nombreCitation1").checked) {
            return 1 }
        else if (document.getElementById("nombreCitation2").checked) {
            return 2 }
        else if (document.getElementById("nombreCitation3").checked) {
            return 3 }
        else if (document.getElementById("nombreCitation4").checked) {
            return 4 }
        else if (document.getElementById("nombreCitation5").checked) {
            return 5 }    
}


/*---------------------------------------------------*/
/*----------------Generation aléatoire---------------*/
/*---------------------------------------------------*/

// Création aléatoire d'un synopsis à partir des jeux de données
function synopsisNanard() {
        var randomNom = Math.floor(Math.random() * (nom.length));
        var randomAttribut = Math.floor(Math.random() * (attribut.length));
        var randomMetier = Math.floor(Math.random() * (metier.length));
        var randomEvenement1 = Math.floor(Math.random() * (evenement1.length));
        var randomEvenement2 = Math.floor(Math.random() * (evenement2.length));
        var randomMechant = Math.floor(Math.random() * (mechant.length));
        var randomOccupation = Math.floor(Math.random() * (occupation.length));
        var randomBut = Math.floor(Math.random() * (but.length));
        var randomPerso2 = Math.floor(Math.random() * (perso2.length));
        var randomAction = Math.floor(Math.random() * (action.length));
        var randomHandicap = Math.floor(Math.random() * (handicap.length));

    //Retourne le jeu de données aléatoires avec les phrases de liaisons
    return nom[randomNom] + " est " + attribut[randomAttribut] + " qui " + metier[randomMetier] + ". Par le passé, il " + evenement1[randomEvenement1] + " et a " + evenement2[randomEvenement2] + ". " + "Mais un jour " + mechant[randomMechant] + ", " + occupation[randomOccupation] + ", décide de " + but[randomBut] + ". Notre héro avec l'aide de " + perso2[randomPerso2] + ", va devoir " + action[randomAction] + " malgré " + handicap[randomHandicap] + "..." + "<p>" ;
};

//Création aléatoire d'une citation à partir des jeux de données
function citationPourrie() {
        var randomDebut = Math.floor(Math.random() * (debut.length));
        var randomMilieu = Math.floor(Math.random() * (milieu.length));
        var randomFin = Math.floor(Math.random() * (fin.length));   
    
    //Retourne le jeu de données aléatoires avec les phrases de liaisons
    return debut[randomDebut] + " , " + milieu[randomMilieu] + " , " + fin[randomFin] + "..." + "<p>" ;
};


/*---------------------------------------------------*/
/*----------------Generation du texte----------------*/
/*---------------------------------------------------*/

// Fonction de génération du texte choisi
function textGenerator() {
    
    var nombreCitation = getNombreCitation();
    // Réinitialisation de l'affichage synopsisDisplay
    document.getElementById("synopsisDisplay").innerHTML = "";
    
    // Boucle de selection pour les synopsis
    if (typeCitation() === 1) {
        var i;
        for (i=0; i<nombreCitation; i++) {
            document.getElementById("synopsisDisplay").innerHTML += synopsisNanard();
        }
    // Boucle de sélection pour les citations    
    } else {        
        var i;
        for (i=0; i<nombreCitation; i++) {
            document.getElementById("synopsisDisplay").innerHTML += citationPourrie();
        }
    }
}


/*---------------------------------------------------*/
/*----------------Quitter le programme---------------*/
/*---------------------------------------------------*/

// Action du bouton "C'est nul, je m'en vais"
function quit() {
    alert("Il suffit de cliquer sur la croix rouge en haut à droite (ou bien à gauche si vous êtes Linuxien/AppleAdddict)")
};








    
