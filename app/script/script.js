//mode use strict pour éviter des données non déclaré ni initialisé
"use strict"

// ************************* Début Déclaration des var utiles ***************

var $valider = $('#valider');
var $lvl = $("#lvl");
var $count = $("#count");
var $chrono = $("#chrono");
var $conteneur = $("#conteneur");
var $body = $("body");
var $header = $("header");
var $footer = $("footer");
var $welcome = $("#welcome");
var $game = $("#game");
var $rule = $("#rule");
var $exemple = $("#exemple");
var $commencer = $("#commencer");
var $boutonOK = $("#ok");

var nombreClick = 0;
var milisecondes = 0;
var secondes = 0;
var minutes = 0;
var on = false;
var reset = false;
var timerID;
var autoClickExemple = 0;
var interval = 1000;

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
var $drapeauExemple = $('#drapeau-exemple');
var $drapeauFrance = $('#drapeau-france');
var $drapeauBelge = $('#drapeau-belgique');
var $drapeauAllemagne = $('#drapeau-allemagne');
var $drapeauHollande = $('#drapeau-hollande');

//exemple demo automatique

// ************************* Fin Déclaration des var utiles ***************

$header.css("display", "none");
$conteneur.css("display", "none");
$footer.css("display", "none");
$welcome.css("display", "none");

var demandeAuto;

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
    $header.css("display", "flex");
    $conteneur.css("display", "flex");
    $footer.css("display", "flex");


    //on affiche pas la div valider au démarrage
    $valider.css("display", "none");

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


    //lvl2
    $lvl.text("Lvl : 2");

    //on affiche pas la div valider au démarrage
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

function acceuil() {

    //on applique une couleur de fond pour le menu d'acceuil
    $('body').css("background-color", "rgba(108, 171, 195, 0.883)");

    $welcome.css("display", "flex");
    $rule.css("display", "flex");
    $exemple.css("display", "none");
    $commencer.css("display", "none");

    //affichage au démarage des textes "pays"
    $france.css("display", "none");
    $belgique.css("display", "none");
    $allemagne.css("display", "none");
    $hollande.css("display", "none");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "none");
    $drapeauBelge.css("display", "none");
    $drapeauAllemagne.css("display", "none");
    $drapeauHollande.css("display", "none");

    //on met le texte dans les div header
    $chrono.html("00 : 00 : 00");
    $count.html("Click : 0");
    $lvl.html("lvl : 1");

    //on ititalise le texte dans les div pays et drapeau
    $france.html("France");
    $drapeauFrance.children().css("background-color", "blue")
    $belgique.html("Belgique");
    $drapeauBelge.children().css("background-color", "black");
    $allemagne.html("Allemagne");
    $drapeauAllemagne.children().css("background-color", "black");
    $hollande.html("Pays-bas");
    $drapeauHollande.children().css("background-color", "red");



    $boutonOK.click(function(){
        demandeAuto = window.prompt("voulez-vous une demo auto (oui/non)", "oui");

        if (demandeAuto == "oui") {
            $rule.css("display", "none");
            $exemple.css("display", "flex");
            setInterval(changementCouleurAuto, 1000);
        } else {
            $rule.css("display", "none");
            $exemple.css("display", "flex");

            $drapeauExemple.children().css("background-color", "black");
            $commencer.css("display", "flex");
        }
    });

    $commencer.click(function(){



        $welcome.css("display", "none");
        france();
    })



}
    





    //france();






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

            $commencer.css("display", "flex");


            break;
        default:
            break;
    }
}


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



