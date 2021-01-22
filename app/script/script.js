//mode use strict pour éviter des données non déclaré ni initialisé
"use strict"
/*
 *  Débug
    france();
    belgique();
    allemagne();
 *  Fin Débug
 */

var $valider = $('#valider');
var $lvl = $("#lvl");
var $count = $("#count");
var $time = $("#time");

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
$lvl.text("Lvl : 1");
$time.text("00:00:00")
$count.text("Click : 0")
$valider.text("valider");
$france.text("France");
$belgique.text("Belgique");
$allemagne.text("Allemagne");
$hollande.text("Pays-bas");

//coloration de base des drapeaux
$drapeauFrance.children().css("background-color", "blue").css("color", "blue");
$drapeauBelge.children().css("background-color", "black").css("color", "black");
$drapeauAllemagne.children().css("background-color", "black").css("color", "black");
$drapeauHollande.children().css("background-color", "red").css("color", "red");








$(function () {
    france();

});

function france() {

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

    // on applique un event click au premier 
    $bleu.click(function () {

        var $couleur = $bleu.css("background-color");

        switch ($couleur) {
            case $blue:
                $bleu.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $bleu.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $bleu.css("background-color", "blue").css("color", "blue");
                break;
            default:
                break;
        };
    });

    // on applique un event click au deuxième 
    $blanc.click(function () {

        var $couleur = $blanc.css("background-color");

        switch ($couleur) {
            case $blue:
                $blanc.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $blanc.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $blanc.css("background-color", "blue").css("color", "blue");
                break;
            default:
                break;
        };
    });

    // on applique un event click au troisième 
    $rouge.click(function () {

        var $couleur = $rouge.css("background-color");

        switch ($couleur) {
            case $blue:
                $rouge.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $rouge.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $rouge.css("background-color", "blue").css("color", "blue");
                break;
            default:
                break;
        };
    });

    /*
    * FIN DRAPEAU FRANCE
     */

    // ****************** étape 2********************************
    // on applique un event au click de la div valider




    

    $valider.click(function () {

        //formule de test
        var $testFrance = ($bleu.css("background-color") == $blue) && ($blanc.css("background-color") == $white) && ($rouge.css("background-color") == $red);

        if ($testFrance) {
            //alert("ok !");
            belgique();
        } else {
            //alert("ko !");
        }
    });

    
}




function belgique() {

    //affichage au démarage des textes "pays"
    $france.css("display", "none");
    $belgique.css("display", "flex");
    $allemagne.css("display", "none");
    $hollande.css("display", "none");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "none");
    $drapeauBelge.css("display", "flex");
    $drapeauAllemagne.css("display", "none");
    $drapeauHollande.css("display", "none");

    // ****************** étape 3********************************
    /*
    * DEBUT DRAPEAU BELGIQUE
     */

    // on récupère les div enfant
    var $noir = $drapeauBelge.children(':nth-child(1)');
    var $jaune = $drapeauBelge.children(':nth-child(2)');
    var $rouge = $drapeauBelge.children(':nth-child(3)');


    // on applique un event click au premier 
    $noir.click(function () {

        var $couleur = $noir.css("background-color");

        switch ($couleur) {
            case $black:
                $noir.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $noir.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $noir.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    // on applique un event click au deuxième 
    $jaune.click(function () {

        var $couleur = $jaune.css("background-color");

        switch ($couleur) {
            case $black:
                $jaune.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $jaune.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $jaune.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    // on applique un event click au troisième 
    $rouge.click(function () {

        var $couleur = $rouge.css("background-color");

        switch ($couleur) {
            case $black:
                $rouge.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $rouge.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $rouge.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    /*
    * FIN DRAPEAU BELGIQUE
     */

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testBelgique = ($noir.css("background-color") == ($black)) && ($jaune.css("background-color") == ($yellow)) && ($rouge.css("background-color") == ($red));

        if ($testBelgique) {
            //alert("ok !");
            allemagne();
        } else {
            //alert("ko !");
        }
    });
}



function allemagne() {

    //affichage au démarage des textes "pays"
    $france.css("display", "none");
    $belgique.css("display", "none");
    $allemagne.css("display", "flex");
    $hollande.css("display", "none");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "none");
    $drapeauBelge.css("display", "none");
    $drapeauAllemagne.css("display", "flex");
    $drapeauHollande.css("display", "none");

    // ****************** étape 5********************************
    /*
    * DEBUT DRAPEAU BELGIQUE
     */

    // on récupère les div enfant
    var $noir = $drapeauAllemagne.children(':nth-child(1)');
    var $rouge = $drapeauAllemagne.children(':nth-child(2)');
    var $jaune = $drapeauAllemagne.children(':nth-child(3)');

    // on applique un event click au premier 
    $noir.click(function () {

        var $couleur = $noir.css("background-color");

        switch ($couleur) {
            case $black:
                $noir.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $noir.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $noir.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    // on applique un event click au deuxième 
    $rouge.click(function () {

        var $couleur = $rouge.css("background-color");

        switch ($couleur) {
            case $black:
                $rouge.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $rouge.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $rouge.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    // on applique un event click au troisième 
    $jaune.click(function () {

        var $couleur = $jaune.css("background-color");

        switch ($couleur) {
            case $black:
                $jaune.css("background-color", "red").css("color", "red");
                break;
            case $red:
                $jaune.css("background-color", "yellow").css("color", "yellow");
                break;
            case $yellow:
                $jaune.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });



    /*
    * FIN DRAPEAU BELGIQUE
     */

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testAllemagne = ($noir.css("background-color") == ($black)) && ($rouge.css("background-color") == ($red)) && ($jaune.css("background-color") == ($yellow));

        if ($testAllemagne) {
            //alert("ok !");
            hollande();

        } else {
            //alert("ko !");
        }
    });

}



function hollande() {

    //affichage au démarage des textes "pays"
    $france.css("display", "none");
    $belgique.css("display", "none");
    $allemagne.css("display", "none");
    $hollande.css("display", "flex");

    //affichage au démarage des drapeaux
    $drapeauFrance.css("display", "none");
    $drapeauBelge.css("display", "none");
    $drapeauAllemagne.css("display", "none");
    $drapeauHollande.css("display", "flex");

    // ****************** étape 5********************************
    /*
    * DEBUT DRAPEAU BELGIQUE
     */

    // on récupère les div enfant
    var $rouge = $drapeauHollande.children(':nth-child(1)');
    var $blanc = $drapeauHollande.children(':nth-child(2)');
    var $bleu = $drapeauHollande.children(':nth-child(3)');

    // on applique un event click au premier 
    $rouge.click(function () {

        var $couleur = $rouge.css("background-color");

        switch ($couleur) {
            case $red:
                $rouge.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $rouge.css("background-color", "blue").css("color", "blue");
                break;
            case $blue:
                $rouge.css("background-color", "red").css("color", "red");
                break;
            default:
                break;
        };
    });

    // on applique un event click au deuxième 
    $blanc.click(function () {

        var $couleur = $blanc.css("background-color");

        switch ($couleur) {
            case $red:
                $blanc.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $blanc.css("background-color", "blue").css("color", "blue");
                break;
            case $blue:
                $blanc.css("background-color", "red").css("color", "red");
                break;
            default:
                break;
        };
    });

    // on applique un event click au troisième 
    $bleu.click(function () {

        var $couleur = $bleu.css("background-color");

        switch ($couleur) {
            case $red:
                $bleu.css("background-color", "white").css("color", "white");
                break;
            case $white:
                $bleu.css("background-color", "blue").css("color", "blue");
                break;
            case $blue:
                $bleu.css("background-color", "red").css("color", "red");
                break;
            default:
                break;
        };
    });



    /*
    * FIN DRAPEAU BELGIQUE
     */

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testHollande = ($rouge.css("background-color") == ($red)) && ($blanc.css("background-color") == ($white)) && ($bleu.css("background-color") == ($blue));

        if ($testHollande) {
            alert("ok !");

        } else {
            alert("ko !");
        }
    });

}