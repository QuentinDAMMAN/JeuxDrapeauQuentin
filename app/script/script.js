//mode use strict pour éviter des données non déclaré ni initialisé
"use strict"

var $valider = $('#valider');

//déclaration couleur
var $blue = 'rgb(0, 0, 255)';
var $white = 'rgb(255, 255, 255)';
var $red = 'rgb(255, 0, 0)';
var $black = 'rgb(0, 0, 0)';
var $yellow = 'rgb(255, 255, 0)';

// déclaration pays
var $france = $('#france');
var $belgique = $('#belgique');

//déclaration drapeau pays
var $drapeauFrance = $('#drapeau-france');
var $drapeauBelge = $('#drapeau-belge');

//ajout de texte dans les div l'html
$valider.text("valider");
$france.text("France");
$belgique.text("Belgique");

//coloration de base des drapeaux
$drapeauFrance.children().css("background-color", "blue").css("color", "blue");
$drapeauBelge.children().css("background-color", "black").css("color", "black");

//affichage au démarage
$france.css("display", "flex");
$drapeauFrance.css("display", "flex");
$belgique.css("display", "none");
$drapeauBelge.css("display", "none");


$(function () {
    france();

});




function france() {

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
            alert("ok !");
            belgique();
        } else {
            alert("ko !");
        }
    });
}




function belgique() {

    $france.css("display", "none");
    $drapeauFrance.css("display", "none");

    $belgique.css("display", "block");
    $drapeauBelge.css("display", "flex");

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

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testFrance = ($noir.css("background-color") == ($black)) && ($jaune.css("background-color") == ($yellow)) && ($rouge.css("background-color") == ($red));

        if ($testFrance) {
            alert("ok !");

        } else {
            alert("ko !");
        }
    });
}