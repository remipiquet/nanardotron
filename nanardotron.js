// Premier jeu de données


// Nom et prénom du héro
var nom = ["Robert Jacquie", "Le cousin par alliance de Peter Parker", "Coco le petit singe", "Albert, le cinquième mousquetaire", "Patrick l'étoile de mer", ];

// Attribut ou métier du héro
var attribut = ["un flic de quartier super sympa", "un adolescent boutonneux quelconque", "un membre du Front de Libération des Nains de Jardin", "un éleveur de castors en Dordogne", "un agent d'accueil au Pôle Emploi de Pontivy", ];

// Occupation ou hobbie du héro
var metier = ["aime les spaguettis aldente", "est passionné de scrapbooking", "joue trop bien du biniou","milite pour le rétablissement de la peine de mort", "essaie de devenir pro-player à Candy Crush", ];

// Background évenement 1
var evenement1 = ["a gagné un tournois de ping-pong au collège", "a eu une opération de l'appendicite lorsqu'il avait 6 ans", "a eu son brevet des collèges à 32 ans", "a raté 6 fois son permis de conduire", "a perdu son chien dans un accident de baignoire", ];

// Background évenement 2
var evenement2 = ["cassé trois pattes à un canard", "été se promener au parc ce matin", "mangé un kebab pas top", "rendu visite à sa vieille tante par acquis de conscience", "vu un hérisson écrasé sur le bord de la route", ];

// Nom du méchant
var mechant = ["le frère de Dark Vador", "Mega Destructor", "Adolf Ben Ladden", "Régis Legroscon", "Kaiser Sozey", ];

// Occupation du méchant
var occupation = ["gardien de prison à la retraite", "banquier d'affaires", "méchant terroriste", "controleur fiscal verreux", "installateur de compteurs linky", ];

// but du méchant
var but = ["buter tous les pingouins sur la banquise", "lancer une bombe nucléaire sur Tourcoing", "crever les pneus de toutes les voitures dans sa rue", "faire peur aux gens avec un masque de clown", "tondre son gazon le dimanche pour faire chier les voisins", ];

// Copain du méchant
var perso2 = ["la copine du frère du voisin d'à côté", "un mec qui passait par là", "Francis Lalanne", "son fidèle teckel de compagnie", "Joli Sauteur, son fidèle destrier", ];

// Action pour gagner
var action = ["jouer à la Belote", "retrouver le chat de la mère Michelle", "gagner un coucours de Guitar Hero dans les Cévennes", "retrouver son portable qu'il a perdu en soirée le weekend dernier", "sauver le monde", ];

// Handicap du héro
var handicap = ["son aputation des mains il y a trois jours", "son pied beau", "son syndrome de la Tourette", "son aérophagie chronique", "son lacet défait", ];


// Second jeu de données


// Bout de citation 1
var debut = ["Une tourterelle morte", "Un castor à lunette", "Une tranche de pain de mie", "Un morceau de chocolat écrasé", "Une paire de lunettes trop moches", ];

// Bout de citation 2
var milieu = ["quand ça sent pas bon", "tôt le matin", "une fois dans la vraie vie", "qu'est ce que je disais déjà ? ah oui", "heu...", ];

// Bout de citation 3
var fin = ["c'est super", "j'adore", "j'aime pas trop beaucoup ça", "ça n'a ni queue ni tête", "ça rox à mort", ];



// Fonction de génération aléatoire des Synopsis
function nouveauSynospis1(typeCitation) {
    
    if (typeCitation == 1) {
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
        
// Affichage du texte
        var synopsis = nom[randomNom] + " est " + attribut[randomAttribut] + " qui " + metier[randomMetier] + ". Par le passé, il " + evenement1[randomEvenement1] + " et a " + evenement2[randomEvenement2] + ". " + "Mais un jour, " + mechant[randomMechant] + ", " + occupation[randomOccupation] + " décide de " + but[randomBut] + ". Notre héro, avec l'aide de " + perso2[randomPerso2] + " va devoir " + action[randomAction] + " malgré " + handicap[randomHandicap] + "...";
        return synopsis;
    }

    else {
        var randomDebut = Math.floor(math.random() * (debut.length));
        var randomMilieu = Math.floor(math.random() * (milieu.length));
        var randomFin = Math.floor(math.random() * (fin.length));
        
// Affichage du texte
        var citation = debut[randomDebut] + ", " + milieu[randomMilieu] + ", " + fin[randomFin] + "...";
        return citation;
    }

    // Affichage du texte
    var synopsis = nom[randomNom] + " est " + attribut[randomAttribut] + " qui " + metier[randomMetier] + ". Par le passé, il " + evenement1[randomEvenement1] + " et a " + evenement2[randomEvenement2] + ". " + "Mais un jour, " + mechant[randomMechant] + ", " + occupation[randomOccupation] + " décide de " + but[randomBut] + ". Notre héro, avec l'aide de " + perso2[randomPerso2] + " va devoir " + action[randomAction] + " malgré " + handicap[randomHandicap] + "...";
    return synopsis;
}

// Récupère le choix du type de citation
function TypeCitation() {
    var choixcit;
    if (document.getElementById("typeCitation1").checked){
        choixcit = 1;
    }
    if (document.getElementById("typeCitation2").checked){
        choixcit = 2;
    }  
    return choixcit;
}

// Récupère le nb de phrases à afficher (menu déroulant)
function NombreSynopsis() {
    var selection = document.getElementById("nbSynopsis");
    var choix = selectedIndex;
    var nombre = select.options[choix].value;
    return nombre;       
}

// function SynopsisManager (à faire en dernier)
function SynopsisManager() {
    if choixcit = 1;
    document.getElementById("synopsisDisplay").innerHTML = nouveauSynospis1;
    
}

    
    
        
   //trucs en vrac 
    
   // document.getElementById("synopsisDisplay1").innerHTML = nom[randomNom1] + " est " + attribut[randomAttribut1] + " qui " + metier[randomMetier1] + ". Par le passé, il " + evenement1[randomEvenement11] + " et a " + evenement2[randomEvenement21] + ". " + "Mais un jour, " + mechant[randomMechant1] + ", " + occupation[randomOccupation1] + " décide de " + but[randomBut1] + ". Notre héro, avec l'aide de " + perso2[randomPerso21] + " va devoir " + action[randomAction1] + " malgré " + handicap[randomHandicap1] + "...";
}



function quit() {
    alert("Il suffit de cliquer sur la croix rouge en haut à droite (ou bien à gauche si vous êtes Linuxien/AppleAdddict)")
};







