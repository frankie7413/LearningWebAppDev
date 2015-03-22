var http = require("http"),
	express = require("express"),
	gameStats = {};

gameStats.aichoice = "";
gameStats.playerchoice = "";
gameStats.outcome = "";
gameStats.wins = 0;
gameStats.losses = 0;
gameStats.ties = 0;

//from hw5 funciton 
//game logic param player selected will update json file
function checkInput(playerSelect) {
    //options available
    var options = ["rock", "paper", "scissors", "lizard", "spock"];
    //selects random value from array
    var aiSelect = options[Math.floor((Math.random() * options.length))]; 

    //store choices
    gameStats.aichoice = aiSelect;
    gameStats.playerchoice = playerSelect;

    if(aiSelect === playerSelect)
    {
        gameStats.outcome = "Tie";
        gameStats.ties++;
    }
    else if (playerSelect === "rock")  
    {
        if(aiSelect === "scissors" || aiSelect === "lizard"){
        	gameStats.outcome = "Win";
            gameStats.wins++;
        }
        else if(aiSelect === "paper" || aiSelect === "spock"){
            gameStats.outcome = "Lose";
            gameStats.losses++; 
        }
    }
    else if (playerSelect === "paper")
    {
        if(aiSelect === "rock" || aiSelect === "spock"){
            gameStats.outcome = "Win";
            gameStats.wins++;
        }
        else if(aiSelect === "scissors" || aiSelect === "lizard"){
            gameStats.outcome = "Lose";
            gameStats.losses++;
        }
        
    }
    else if (playerSelect === "scissors") //working
    {
        if(aiSelect === "rock" || aiSelect === "spock"){
            gameStats.outcome = "Lose";
            gameStats.losses++;
        }
        else if(aiSelect === "paper" || aiSelect === "lizard"){
            gameStats.outcome = "Win";
            gameStats.wins++;
        }

    }
    else if (playerSelect === "lizard")
    {
        if(aiSelect === "rock" || aiSelect === "scissors"){
            gameStats.outcome = "Lose";
            gameStats.losses++;
        }
        else if(aiSelect === "paper" || aiSelect === "spock"){
            gameStats.outcome = "Win";
            gameStats.wins++;
        }
       
    }
    else if (playerSelect === "spock")
    {
        if(aiSelect === "rock" || aiSelect === "scissors"){
            gameStats.outcome = "Win";
            gameStats.wins++;
        }
        else if(aiSelect === "lizard" || aiSelect === "paper"){
            gameStats.outcome = "Lose";
            gameStats.losses++;
        }       
    }

    //console.log("function processed");
}


app = express();
http.createServer(app).listen(3000);  //sets server & app 

app.use(express.static(__dirname + "/client"));

app.get("/play/rock", function (req, res) {
	checkInput("rock");	//updates json object
	res.json(gameStats); //sends json object
	console.log("Rock Played");	
});

app.get("/play/paper", function (req, res) {
	checkInput("paper");	//updates json object
	res.json(gameStats); //sends json object
	console.log("Paper Played");	
});

app.get("/play/scissors", function (req, res) {
	checkInput("scissors");	//updates json object
	res.json(gameStats); //sends json object
	console.log("scissors Played");	
});

app.get("/play/lizard", function (req, res) {
	checkInput("lizard");	//updates json object
	res.json(gameStats); //sends json object
	console.log("Lizard Played");	
});

app.get("/play/spock", function (req, res) {
	checkInput("spock");	//updates json object
	res.json(gameStats); //sends json object
	console.log("Spock Played");	
});

app.get("/", function (req, res) {
	
});

 
console.log("Server is listening at port 3000");