var http = require("http"),
	express = require("express"),
	app;

//store stats of games played
var gameStats = {
    outcome: "\"play\"",
    wins: 0,
    losses: 0,
    ties: 0
};

//from hw5 funciton 
//game logic param player selected will update json file
function checkInput(playerSelect){
    //options available
    var options = ["rock", "paper", "scissors", "lizard", "spock"];
    //selects random value from array
    var aiSelect = options[Math.floor((Math.random() * options.length))]; 

    //saved to use in gameResult funtion
    aiChoice = aiSelect; 
    playerChoice = playerSelect;

    if(aiSelect === playerSelect)
    {
        gameStats.outcome = "\"Tie\"";
        gameStats.ties++;
    }
    else if (playerSelect === "rock")  
    {
        if(aiSelect === "scissors" || aiSelect === "lizard"){
            gameStats.outcome = "\"win\"";
            gameStats.wins++;
        }
        else if(aiSelect === "paper" || aiSelect === "spock"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses++; 
        }
    }
    else if (playerSelect === "paper")
    {
        if(aiSelect === "rock" || aiSelect === "spock"){
            gameStats.outcome = "\"win\"";
            gameStats.wins++;
        }
        else if(aiSelect === "scissors" || aiSelect === "lizard"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses++;
        }
        
    }
    else if (playerSelect === "scissors") //working
    {
        if(aiSelect === "rock" || aiSelect === "spock"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses++;
        }
        else if(aiSelect === "paper" || aiSelect === "lizard"){
            gameStats.outcome = "\"win\"";
            gameStats.wins++;
        }

    }
    else if (playerSelect === "lizard")
    {
        if(aiSelect === "rock" || aiSelect === "scissors"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses++;
        }
        else if(aiSelect === "paper" || aiSelect === "spock"){
            gameStats.outcome = "\"win\"";
            gameStats.wins++;
        }
       
    }
    else if (playerSelect === "spock")
    {
        if(aiSelect === "rock" || aiSelect === "scissors"){
            gameStats.outcome = "\"win\"";
            gameStats.wins++;
        }
        else if(aiSelect === "lizard" || aiSelect === "paper"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses++;
        }       
    }

}


app = express();
http.createServer(app).listen(3000);  //sets server & app 

app.use(express.static(__dirname + "/client"));

app.get("/play/rock", function (res, req){
	checkInput("rock");
	res.json(gameStats);
});

 
console.log("Server is listening at port 3000");