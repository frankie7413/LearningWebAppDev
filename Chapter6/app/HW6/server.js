var http = require("http");
"use strict";

//store stats of games played
var gameStats = {
    outcome = "None",
    wins: 0,
    losses: 0,
    ties: 0
};

//game logic param player selected 
function checkInput(playerSelect){
    //options available
    var options = ["rock", "paper", "scissors", "lizard", "spock"];
    //selects random value from array
    var aiSelect = options[Math.floor((Math.random() * options.length))]; 

    if(aiSelect === playerSelect)
    {
        gameStats.ties = gameStats.ties + 1;
        gameStats.outcome = "Tie";
    }
    else if (playerSelect === "rock")  //done
    {
        if(aiSelect === "scissors"){
            game.outcome = "Win";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "paper"){
            outcome = "lose"
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "lizard"){
            outcome = "win";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }

    }
    else if (playerSelect === "scissors") //working
    {
        if(aiSelect === "rock"){
            game.outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }else if(aiSelect === "paper"){
            outcome = "win"
            gameStats.wins = gameStats.wins + 1;
        }
        else if(aiSelect === "lizard"){
            outcome = "win";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }
    }
    else if (playerSelect === "paper")
    {
        if(aiSelect === "rock"){
            game.outcome = "Win";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "scissors"){
            outcome = "lose"
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "lizard"){
            outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }
        else{
            outcome = "win";
            gameStats.wins = gameStats.wins + 1;
        }        
    }
    else if (playerSelect === "lizard")
    {
        if(aiSelect === "rock"){
            game.outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }else if(aiSelect === "scissors"){
            outcome = "lose"
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "paper"){
            outcome = "win";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            outcome = "win";
            gameStats.wins = gameStats.wins + 1;
        }        
    }
    else if (playerSelect === "spock")
    {
        if(aiSelect === "rock"){
            game.outcome = "Win";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "scissors"){
            outcome = "win"
            gameStats.wins = gameStats.wins + 1;
        }
        else if(aiSelect === "lizard"){
            outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }
        else{
            outcome = "lose";
            gameStats.losses = gameStats.losses + 1;
        }        
    }

};