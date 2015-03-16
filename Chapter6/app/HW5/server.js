var http = require("http"),
    temp,
    obj, 
    aiChoice,
    playerChoice,
    server;

//store stats of games played
var gameStats = {
    outcome: "\"play\"",
    wins: 0,
    losses: 0,
    ties: 0
};

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
        gameStats.ties = gameStats.ties + 1;
    }
    else if (playerSelect === "rock")  
    {
        if(aiSelect === "scissors"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "paper"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "lizard"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
    }
    else if (playerSelect === "paper")
    {
        if(aiSelect === "rock"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "scissors"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "lizard"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
        else{
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }        
    }
    else if (playerSelect === "scissors") //working
    {
        if(aiSelect === "rock"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }else if(aiSelect === "paper"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }
        else if(aiSelect === "lizard"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
    }
    else if (playerSelect === "lizard")
    {
        if(aiSelect === "rock"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }else if(aiSelect === "scissors"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
        else if(aiSelect === "paper"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }
        else{
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }        
    }
    else if (playerSelect === "spock")
    {
        if(aiSelect === "rock"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }else if(aiSelect === "scissors"){
            gameStats.outcome = "\"win\"";
            gameStats.wins = gameStats.wins + 1;
        }
        else if(aiSelect === "lizard"){
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }
        else{
            gameStats.outcome = "\"lose\"";
            gameStats.losses = gameStats.losses + 1;
        }        
    }

}

//default page to show options 
function bodyPage(res) {

    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    //head
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>Game Testing</title>\n");
    res.write("</head>\n");

    //body
    res.write("<body>\n");
    res.write("<p>Choose an option:</p>\n");
    res.write("<form method='POST' action='/play/rock'><input type='submit' value='Rock'></form>\n");
    res.write("<form method='POST' action='/play/paper'><input type='submit' value='Paper'></form>\n");
    res.write("<form method='POST' action='/play/scissors'><input type='submit' value='Scissors'></form>\n");
    res.write("<form method='POST' action='/play/lizard'><input type='submit' value='Lizard'></form>\n");
    res.write("<form method='POST' action='/play/spock'><input type='submit' value='Spock'></form>\n");    
    res.write("</body>\n");
    res.end("</html>\n");
}

// var options = ["rock", "paper", "scissors", "lizard", "spock"];
//routing after post to display score outcome and update json
function routePage(req, res){
    //not sure if i need this here or add later hm...
    res.writeHead(200, {"Content-Type": "text/html"});
    if(req.method === "POST" && req.url === "/play/rock"){
        checkInput("rock");
        gameResult(res);
    }
    else if(req.method === "POST" && req.url === "/play/paper"){
        checkInput("paper");
        gameResult(res);
    }
    else if(req.method === "POST" && req.url === "/play/scissors"){
        checkInput("scissors");
        gameResult(res);
    }
    else if(req.method === "POST" && req.url === "/play/lizard"){
        checkInput("lizard");
        gameResult(res);
    }
    else if(req.method === "POST" && req.url === "/play/spock"){
        checkInput("spock");
        gameResult(res);
    }
    else 
    {
        bodyPage(res);
    }
}

//page with json object response 
function gameResult(res) {
    temp = '{"outcome": ' + gameStats.outcome + ', "wins": ' + gameStats.wins + ', "losses": ' + gameStats.losses + ', "ties": ' + gameStats.ties + '}';
    //parse json object 
    obj = JSON.parse(temp);

    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>GAme Test</title>\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("You chose: " + playerChoice + "<br>\n");
    res.write("AI chooses: " + aiChoice + "<br><br>\n");
    res.write("Outcome: " + obj.outcome + "<br>\n");
    res.write("Wins: " + obj.wins + "<br>\n");
    res.write("Losses: " + obj.losses + "<br>\n");
    res.write("Ties: " + obj.ties + "<br>\n");
    res.write("<br><a href='../../''>Try again</a>\n"); //to go back to bodypage
    res.write("</body>\n");
    res.end("</html>\n");

}


server = http.createServer(routePage);

server.listen(3000);
 
console.log("Server is listening at port 3000");