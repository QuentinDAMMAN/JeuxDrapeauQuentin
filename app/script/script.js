"use strict"


var $pays = $('#pays');
var $drapeau = $('#drapeau');
var $valider = $('#valider');

$(lvl1,() =>{

});


function lvl1(){

    // ****************** étape 1********************************
    /*
    * DRAPEAU FRANCE
     */
    // on met France dans la div prévu
    $pays.text("France");

    //on applique du bleu au enfant de la div
    $drapeau.children().css("background-color", "blue").css("color", "blue");

    // on récupère les div enfant
    var $bleu = $drapeau.children(':first-child');
    var $blanc = $drapeau.children(':nth-child(2)');
    var $rouge = $drapeau.children(':last-child');

    // on applique un event click au premier 
    $bleu.click(function () {

        var $couleur = $bleu.css("background-color");

        switch ($couleur) {
            case 'rgb(0, 0, 255)':
                $bleu.css("background-color", "white").css("color", "white");
                break;
            case 'rgb(255, 255, 255)':
                $bleu.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
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
            case 'rgb(0, 0, 255)':
                $blanc.css("background-color", "white").css("color", "white");
                break;
            case 'rgb(255, 255, 255)':
                $blanc.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
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
            case 'rgb(0, 0, 255)':
                $rouge.css("background-color", "white").css("color", "white");
                break;
            case 'rgb(255, 255, 255)':
                $rouge.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
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
        var $testFrance = ($bleu.css("background-color") == ('rgb(0, 0, 255)')) && ($blanc.css("background-color") == ('rgb(255, 255, 255)')) && ($rouge.css("background-color") == ('rgb(255, 0, 0)'));

        if ($testFrance) {
            alert("ok !");

            lv2();
        
        } else {
            alert("ko !");
        }
    });

}



function lv2(){


     // ****************** étape 3********************************
    /*
    * DEBUT DRAPEAU BELGIQUE
     */
    // on met Belgique dans la div prévu
    $pays.text("Belgique");

    //on applique du noir au enfant de la div
    $drapeau.children().css("background-color", "black").css("color", "black");

    // on récupère les div enfant
    var $noir = $drapeau.children(':first-child');
    var $jaune = $drapeau.children(':nth-child(2)');
    var $rouge = $drapeau.children(':last-child');

    // on applique un event click au premier 
    $noir.click(function () {

        var $couleur = $noir.css("background-color");

        switch ($couleur) {
            case 'rgb(0, 0, 0)':
                $noir.css("background-color", "yellow").css("color", "yellow");
                break;
            case 'rgb(255, 255, 0)':
                $noir.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
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
            case 'rgb(0, 0, 0)':
                $jaune.css("background-color", "yellow").css("color", "yellow");
                break;
            case 'rgb(255, 255, 0)':
                $jaune.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
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
            case 'rgb(0, 0, 0)':
                $rouge.css("background-color", "yellow").css("color", "yellow");
                break;
            case 'rgb(255, 255, 0)':
                $rouge.css("background-color", "red").css("color", "red");
                break;
            case 'rgb(255, 0, 0)':
                $rouge.css("background-color", "black").css("color", "black");
                break;
            default:
                break;
        };
    });

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testFrance = ($noir.css("background-color") == ('rgb(0, 0, 0)')) && ($jaune.css("background-color") == ('rgb(255, 255, 0)')) && ($rouge.css("background-color") == ('rgb(255, 0, 0)'));

        if ($testFrance) {
            alert("ok !");

        } else {
            alert("ko !");
        }
    });

}