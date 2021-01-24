//mode use strict pour éviter des données non déclaré ni initialisé
"use strict"

// ************************* Début Déclaration des var utiles ***************
var $lvl = $("#lvl");
var $count = $("#count");
var $chrono = $("#chrono");
var $boutonRejouer = $("#rejouer")
var $conteneur = $("#conteneur");
var $body = $("body");
var $header = $("header");
var $welcome = $("#welcome");
var $game = $("#game");
var $rule = $("#rule");
var $exemple = $("#exemple");
var $commencer = $("#commencer");
var $boutonOK = $("#ok");
var $boutonAccueil1 = $("#next-1");
var $boutonAccueil2 = $("#next-2");

var nombreClick = 0;
var milisecondes = 0;
var secondes = 0;
var minutes = 0;
var on = false;
var reset = false;
var timerID;
var autoClickExemple = 0;
var interval = 1000;
var demandeAuto;

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
var $pologne = $("#pologne");
//var $tcheque = $("#tcheque");

//déclaration drapeau pays
var $drapeauExemple = $('#drapeau-exemple');
var $drapeauFrance = $('#drapeau-france');
var $drapeauBelge = $('#drapeau-belgique');
var $drapeauAllemagne = $('#drapeau-allemagne');
var $drapeauHollande = $('#drapeau-hollande');
var $drapeauPologne = $('#drapeau-pologne');
//var $drapeauTcheque = $('#drapeau-tcheque');
// ************************* Fin Déclaration des var utiles ***************

// ************************* initialisation des var utiles ***************
//on affiche pas de pays ni de drapeau
$france.css("display", "none");
$belgique.css("display", "none");
$allemagne.css("display", "none");
$hollande.css("display", "none");
$pologne.css("display", "none");
$drapeauFrance.css("display", "none");
$drapeauBelge.css("display", "none");
$drapeauAllemagne.css("display", "none");
$drapeauHollande.css("display", "none");
$drapeauPologne.css("display", "none");

//on met le texte dans les div header
$chrono.html("00 : 00 : 00");
$count.html("Click : 0");
$lvl.html("lvl : 1");

//on ititalise le texte dans les div pays et drapeau
$france.html("France");
$belgique.html("Belgique");
$allemagne.html("Allemagne");
$hollande.html("Pays-bas");
$pologne.html("Pologne");
$drapeauFrance.children().css("background-color", "blue")
$drapeauBelge.children().css("background-color", "black");
$drapeauAllemagne.children().css("background-color", "black");
$drapeauHollande.children().css("background-color", "red");
$drapeauPologne.children().css("background-color", "white");
// ************************* initialisation des var utiles ***************

$header.css("display", "none");
$conteneur.css("display", "none");
$welcome.css("display", "none");
$game.css("display", "none");
$rule.css("display", "none");
$exemple.css("display", "none");
$commencer.css("display", "none");
$boutonRejouer.css("display", "none");

//function onLoad
$(function () {
    acceuil();
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

// ************************* Début France ***************
function france() {

    // $body.css("background-color", "rgba(218, 194, 129, 0.924)");
    $body.css("background-color", "rgba(200, 166, 70, 0.924)");
    $header.css("display", "flex");
    $conteneur.css("display", "flex");

    //on affiche le compteur de click, lvl, chrono
    $count.css("display", "flex");
    $chrono.css("display", "flex");
    $lvl.css("display", "flex");

    //on lance le chrono 
    startChrono();

    //affichage au démarage des textes "pays"
    $france.css("display", "flex");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "flex");

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
                $(this).css("background-color", "white");
                break;
            case $white:
                $(this).css("background-color", "red");
                break;
            case $red:
                $(this).css("background-color", "blue");
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
            //$valider.css("display", "flex");
            $france.css("display", "none");
            $drapeauFrance.css("display", "none");
            belgique();
        }
    });
}
// ************************* Fin France ***************

// ************************* Début Belgique ***************
function belgique() {

    //lvl2
    $lvl.text("Lvl : 2");

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
                $(this).css("background-color", "yellow");
                break;
            case $yellow:
                $(this).css("background-color", "red");
                break;
            case $red:
                $(this).css("background-color", "black");
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
            $belgique.css("display", "none");
            $drapeauBelge.css("display", "none");
            allemagne();
        }
    });
}
// ************************* Fin Belgique ***************

// ************************* Début Allemagne ***************
function allemagne() {

    //lvl3
    $lvl.text("Lvl : 3");

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
                $(this).css("background-color", "red");
                break;
            case $red:
                $(this).css("background-color", "yellow");
                break;
            case $yellow:
                $(this).css("background-color", "black");
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
            $allemagne.css("display", "none");
            $drapeauAllemagne.css("display", "none");
            hollande();
        }
    });
}
// ************************* Fin Allemagne ***************

// ************************* Début Holande ***************
function hollande() {

    //lvl4
    $lvl.text("Lvl : 4");

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
                $(this).css("background-color", "white");
                break;
            case $white:
                $(this).css("background-color", "blue");
                break;
            case $blue:
                $(this).css("background-color", "red");
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
            $hollande.css("display", "none"),
                $drapeauHollande.css("display", "none");
            Pologne();
        }
    });
}
// ************************* Fin Hollande ***************

// ************************* Début Pologne ***************
function Pologne() {

    //lvl5
    $lvl.text("Lvl : 5");

    //affichage au démarage des textes "pays"
    $pologne.css("display", "flex");

    //affichage au démarage des drapeaux
    $drapeauPologne.css("display", "flex");

    // on récupère les div enfant
    var $blanc = $drapeauPologne.children(':nth-child(1)');
    var $rouge = $drapeauPologne.children(':nth-child(2)');


    // on applique un event clic au enfant div pour changer les couleurs
    $drapeauPologne.children().click(function () {

        //on incrémente le compteurs de clicks
        nombreClick++;
        //on modifie le texte de la div compteur
        $count.text("Click : " + nombreClick);

        var $elem = $(this).css("background-color");

        switch ($elem) {
            case $white:
                $(this).css("background-color", "red");
                break;
            case $red:
                $(this).css("background-color", "white");
                break;
            default:
                break;
        };
    });

    //test des couleurs à l'issue du click
    $drapeauPologne.children().click(function () {

        //formule de test
        var $testPologne = ($blanc.css("background-color") == ($white)) && ($rouge.css("background-color") == ($red));

        if ($testPologne) {
            $pologne.css("display", "none"),
                $drapeauPologne.css("display", "none");
            fin();
        }
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

//fonction démo auto
function changementCouleurAuto() {

    var $zone1 = $drapeauExemple.children(':nth-child(1)');
    var $zone2 = $drapeauExemple.children(':nth-child(2)');
    var $zone3 = $drapeauExemple.children(':nth-child(3)');
    var $mot1 = $game.children(':nth-child(1)');
    var $mot2 = $game.children(':nth-child(2)');
    var $mot3 = $game.children(':nth-child(3)');

    switch (autoClickExemple) {
        case 0:
            $drapeauExemple.children().css("background-color", "yellowgreen");
            $game.children().css("color", "yellowgreen");
            autoClickExemple++;
            break;

        // zone 1
        case 1:
            $zone1.css("background-color", "red");
            $mot1.css("color", "red");
            autoClickExemple++;
            break;
        case 2:
            $zone1.css("background-color", "orange");
            $mot1.css("color", "orange");
            autoClickExemple++;
            break;
        case 3:
            $zone1.css("background-color", "black");
            $mot1.css("color", "black");
            autoClickExemple++;
            break;

        //zone 2
        case 4:
            $zone2.css("background-color", "red");
            $mot2.css("color", "red");
            autoClickExemple++;
            break;
        case 5:
            $zone2.css("background-color", "orange");
            $mot2.css("color", "orange");
            autoClickExemple++;
            break;
        case 6:
            $zone2.css("background-color", "black");
            $mot2.css("color", "black");
            autoClickExemple++;
            break;

        //zone 3
        case 7:
            $zone3.css("background-color", "red");
            $mot3.css("color", "red");
            autoClickExemple++;
            break;
        case 8:
            $zone3.css("background-color", "orange");
            $mot3.css("color", "orange");
            autoClickExemple++;
            break;
        case 9:
            $zone3.css("background-color", "black");
            $mot3.css("color", "black");
            autoClickExemple++;
            break;

        case 10:
            $drapeauExemple.children().css("background-color", "Navy");
            $game.children().css("color", "Navy");
            autoClickExemple++;
            break;
        case 11:
            $commencer.css("display", "flex");
            break;
        default:
            break;
    }
}

function acceuil() {

    /* 1: PAGE D'ACCEUIL */
    $('body').css("background-color", "rgba(108, 171, 195, 0.883)");
    $boutonOK.css("color", "Navy");
    $boutonAccueil1.css("color", "Navy");
    $boutonAccueil2.css("color", "Navy");

    $welcome.css("display", "flex");
    $game.css("display", "flex");

    $boutonAccueil1.css("display", "flex");
    $boutonAccueil2.css("display", "flex");

    $boutonAccueil1.click(function () {
        $boutonAccueil1.css("display", "none");
        $boutonAccueil2.css("display", "none");
        $rule.css("display", "flex");
    });

    $boutonAccueil2.click(function () {
        $welcome.css("display", "none");
        france();
    });

    /* 1: Explication */

    $boutonOK.click(function () {
        $rule.css("display", "none");
        $exemple.css("display", "flex");
        setInterval(changementCouleurAuto, 1000);
    });

    $commencer.click(function () {
        $welcome.css("display", "none");
        france();
    });
}

function fin() {
    // console.log("fin de partie");
    // console.log("chrono : ", $("#chrono").text());
    // console.log("click : ", nombreClick);
    $hollande.css("display", "none");
    // secondes = 0;
    // minutes = 0;
    // nombreClick = 0;
    // $chrono.html("00 : 00 : 00");
    // $count.html("Click : 0");
    // $lvl.html("lvl : ");

    resetChrono();

    $conteneur.css("display", "none");
    $boutonRejouer.css("display", "flex");
    $header.css("height", "100%");
    $header.css("flex-direction", "column");
}