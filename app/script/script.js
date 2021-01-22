//mode use strict pour éviter des données non déclaré ni initialisé
"use strict"

//function onLoad
$(function () {
    france();
    /*
     *
     Débug
     *
     france();
     belgique();
     allemagne();
     hollande();
     *
     */
});

// ************************* Début Déclaration des var utiles ***************
var $valider = $('#valider');
var $lvl = $("#lvl");
var $count = $("#count");
var $chrono = $("#chrono");
var nombreClick = 0;
var milisecondes = 0;
var secondes = 0;
var minutes = 0;
var on = false;
var reset = false;
var timerID;

//déclaration couleur
var $blue = 'rgb(0, 0, 255)';
var $white = 'rgb(255, 255, 255)';
var $red = 'rgb(255, 0, 0)';
var $black = 'rgb(0, 0, 0)';
var $yellow = 'rgb(255, 255, 0)';

// déclaration pays
var $france = $('#france');
var $belgique = $('#belgique');
var $allemagne = $('#allemagne');
var $hollande = $('#hollande');

//déclaration drapeau pays
var $drapeauFrance = $('#drapeau-france');
var $drapeauBelge = $('#drapeau-belgique');
var $drapeauAllemagne = $('#drapeau-allemagne');
var $drapeauHollande = $('#drapeau-hollande');

//ajout de texte dans les div l'html
//$chrono.text("00:00:00")
$valider.text("valider");
// ************************* Fin Déclaration des var utiles ***************



function fin() {
    console.log("fin de partie");
    console.log("chrono : ", $("#chrono").text());
    console.log("click : ", nombreClick);
    $hollande.css("display", "none");
    resetChrono();
    secondes = 0;
    minutes = 0;
    nombreClick = 0;
    $chrono.html("00 : 00 : 00");
    $count.html("Click : 0");
    $lvl.html("lvl : ");
}


// ************************* Début France ***************
function france() {

    //on lance le chrono 
    startChrono();

    //on ititalise le texte dans les div pays et drapeau
    $france.text("France");
    $drapeauFrance.children().css("background-color", "blue")

    //on modifie le texte de la div compteur
    $count.text("Click : " + nombreClick);

    //lvl1
    $lvl.text("Lvl : 1");

    //on affiche pas la div valider au démarrageF
    $valider.css("display", "none");

    //affichage au démarage des textes "pays"
    $france.css("display", "flex");
    $belgique.css("display", "none");
    $allemagne.css("display", "none");
    $hollande.css("display", "none");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "flex");
    $drapeauBelge.css("display", "none");
    $drapeauAllemagne.css("display", "none");
    $drapeauHollande.css("display", "none");

    // on récupère les div enfant
    var $bleu = $drapeauFrance.children(':nth-child(1)');
    var $blanc = $drapeauFrance.children(':nth-child(2)');
    var $rouge = $drapeauFrance.children(':nth-child(3)');

    // on applique un event clic au enfant div pour changer les couleurs
    $drapeauFrance.children().click(function () {

        //on incrémente le compteurs de clicks
        nombreClick++;
        //on modifie le texte de la div compteur
        $count.text("Click : " + nombreClick);

        var $elem = $(this).css("background-color");

        switch ($elem) {
            case $blue:
                $(this).css("background-color", "white").css("color", "white");
                break;
            case $white:
                $(this).css("background-color", "red").css("color", "red");
                break;
            case $red:
                $(this).css("background-color", "blue").css("color", "blue");
                break;
            default:
                break;
        };
    });

    //test des couleurs à l'issue du click
    $drapeauFrance.children().click(function () {

        //formule de test
        var $testFrance = ($bleu.css("background-color") == $blue) && ($blanc.css("background-color") == $white) && ($rouge.css("background-color") == $red);

        if ($testFrance) {
            $valider.css("display", "flex");
        }
    });

    //click sur la div valider
    $valider.click(function () {
        $france.css("display", "none");
        $drapeauFrance.css("display", "none");
        belgique();
    });
}
// ************************* Fin France ***************


// ************************* Début Belgique ***************
function belgique() {

    //on ititalise le texte dans les div pays et drapeau
    $belgique.text("Belgique");
    $drapeauBelge.children().css("background-color", "black").css("color", "black");

    //lvl2
    $lvl.text("Lvl : 2");

    //on affiche pas la div valider au démarrageF
    $valider.css("display", "none");

    //affichage au démarage des textes "pays"
    $belgique.css("display", "flex");


    //affichage au démarage des drapeaux
    $drapeauBelge.css("display", "flex");


    // on récupère les div enfant
    var $noir = $drapeauBelge.children(':nth-child(1)');
    var $jaune = $drapeauBelge.children(':nth-child(2)');
    var $rouge = $drapeauBelge.children(':nth-child(3)');


    // on applique un event clic au enfant div pour changer les couleurs
    $drapeauBelge.children().click(function () {

        //on incrémente le compteurs de clicks
        nombreClick++;
        //on modifie le texte de la div compteur
        $count.text("Click : " + nombreClick);

        var $elem = $(this).css("background-color");

        switch ($elem) {
            case $black:
                $(this).css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $(this).css("background-color", "red").css("color", "red");
                break;
            case $red:
                $(this).css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    //test des couleurs à l'issue du click
    $drapeauBelge.children().click(function () {

        //formule de test
        var $testBelgique = ($noir.css("background-color") == ($black)) && ($jaune.css("background-color") == ($yellow)) && ($rouge.css("background-color") == ($red));

        if ($testBelgique) {
            $valider.css("display", "flex");
        }
    });

    //click sur la div valider
    $valider.click(function () {
        $belgique.css("display", "none");
        $drapeauBelge.css("display", "none");
        allemagne();
    });
}
// ************************* Fin Belgique ***************


// ************************* Début Allemagne ***************
function allemagne() {

    //on ititalise le texte dans les div pays et drapeau
    $allemagne.text("Allemagne");
    $drapeauAllemagne.children().css("background-color", "black").css("color", "black");

    //lvl3
    $lvl.text("Lvl : 3");

    //on affiche pas la div valider au démarrageF
    $valider.css("display", "none");

    //affichage au démarage des textes "pays"
    $allemagne.css("display", "flex");

    //affichage au démarage des drapeaux
    $drapeauAllemagne.css("display", "flex");

    // on récupère les div enfant
    var $noir = $drapeauAllemagne.children(':nth-child(1)');
    var $rouge = $drapeauAllemagne.children(':nth-child(2)');
    var $jaune = $drapeauAllemagne.children(':nth-child(3)');

    // on applique un event clic au enfant div pour changer les couleurs
    $drapeauAllemagne.children().click(function () {

        //on incrémente le compteurs de clicks
        nombreClick++;
        //on modifie le texte de la div compteur
        $count.text("Click : " + nombreClick);

        var $elem = $(this).css("background-color");

        switch ($elem) {
            case $black:
                $(this).css("background-color", "red").css("color", "red");
                break;
            case $red:
                $(this).css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $(this).css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    //test des couleurs à l'issue du click
    $drapeauAllemagne.children().click(function () {

        //formule de test
        var $testAllemagne = ($noir.css("background-color") == ($black)) && ($rouge.css("background-color") == ($red)) && ($jaune.css("background-color") == ($yellow));

        if ($testAllemagne) {
            $valider.css("display", "flex");
        }
    });

    //click sur la div valider
    $valider.click(function () {
        $allemagne.css("display", "none");
        $drapeauAllemagne.css("display", "none");
        hollande();
    });
}
// ************************* Fin Allemagne ***************


// ************************* Début Holande ***************
function hollande() {

    //on ititalise le texte dans les div pays et drapeau
    $hollande.text("Pays-bas");
    $drapeauHollande.children().css("background-color", "red").css("color", "red");

    //lvl4
    $lvl.text("Lvl : 4");

    //on affiche pas la div valider au démarrageF
    $valider.css("display", "none");

    //affichage au démarage des textes "pays"
    $hollande.css("display", "flex");

    //affichage au démarage des drapeaux
    $drapeauHollande.css("display", "flex");

    // on récupère les div enfant
    var $rouge = $drapeauHollande.children(':nth-child(1)');
    var $blanc = $drapeauHollande.children(':nth-child(2)');
    var $bleu = $drapeauHollande.children(':nth-child(3)');

    // on applique un event clic au enfant div pour changer les couleurs
    $drapeauHollande.children().click(function () {

        //on incrémente le compteurs de clicks
        nombreClick++;
        //on modifie le texte de la div compteur
        $count.text("Click : " + nombreClick);

        var $elem = $(this).css("background-color");

        switch ($elem) {
            case $red:
                $(this).css("background-color", "white").css("color", "white");
                break;
            case $white:
                $(this).css("background-color", "blue").css("color", "blue");
                break;
            case $blue:
                $(this).css("background-color", "red").css("color", "red");
                break;
            default:
                break;
        };
    });

    //test des couleurs à l'issue du click
    $drapeauHollande.children().click(function () {

        //formule de test
        var $testHollande = ($rouge.css("background-color") == ($red)) && ($blanc.css("background-color") == ($white)) && ($bleu.css("background-color") == ($blue));

        if ($testHollande) {
            $valider.css("display", "flex");
        }
    });

    //click sur la div valider
    $valider.click(function () {
        $hollande.css("display", "none"),
        $drapeauHollande.css("display", "none");
        fin();
    });
}
// ************************* Fin Hollande ***************


// ************************* début Chrono ***************
function chrono() {

    milisecondes += 1;

    if (milisecondes > 99) {
        secondes += 1;
        milisecondes = 0;
    }

    if (secondes > 59) {
        minutes += 1;
        secondes = 0;
    }

    if (minutes < 10 && secondes < 10) {
        $chrono.html("0" + minutes + " : 0" + secondes + " : " + milisecondes);
    }
    else if (minutes < 10 && secondes >= 10) {
        $chrono.html("0" + minutes + " : " + secondes + " : " + milisecondes);
    }
    else if (minutes >= 10 && secondes < 10) {
        $chrono.html(+minutes + " : 0" + secondes + " : " + milisecondes);
    }
    else if (minutes >= 10 && secondes > 10) {
        $chrono.html(+minutes + " : " + secondes) + " : " + milisecondes;
    }
}

function startChrono() {
    if (on === false) {
        timerID = setInterval(chrono, 10);
        on = true;
        reset = false;
    }
}

function stopChrono() {
    if (on === true) {
        on = false;
        clearTimeout(timerID);
    }
}

function resetChrono() {
    if (reset === false) {
        clearInterval(timerID);
        reset = true;
    }
}
// ************************* Fin Chrono ***************
