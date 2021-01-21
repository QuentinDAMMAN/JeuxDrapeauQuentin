"use strict"

$(function () {

    // on récupère les 3 div par leur id
    var $pays = $('#pays');
    var $drapeau = $('#drapeau');
    var $valider = $('#valider');




    // ****************** étape 1********************************

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

    // on applique un event au click de la div valider
    $valider.click(function () {

        //formule de test
        var $testFrance = ($bleu.css("background-color") == ('rgb(0, 0, 255)')) && ($blanc.css("background-color") == ('rgb(255, 255, 255)')) && ($rouge.css("background-color") == ('rgb(255, 0, 0)'));

        if ($testFrance) {
            alert("ok !");

            $.getScript()
            
        } else {
            alert("ko !");
        }
    });



    // ****************** étape 2********************************F

















});


