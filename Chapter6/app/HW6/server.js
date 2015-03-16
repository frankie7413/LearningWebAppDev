var http = require("http"),
    temp,
    obj, 
    server;

//store stats of games played
var gameStats = {
    outcome: "None",
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
            outcome = "lose";
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
            outcome = "win";
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
            outcome = "lose";
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
            outcome = "lose";
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
            outcome = "win";
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

}


//default page
function bodyPage(res) {

    //res.writeHead(200, {"Content-Type": "text/plain"});

    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    //head
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>Game Testing</title>\n");
    res.write("</head>\n");

    //body
    res.write("<body>\n");
    res.write("<p>Choose an option: </p>\n");
    res.write("<form method='POST' action='/play/rock'><input type='submit' value='Rock'></form>\n");
    res.write("<form method='POST' action='/play/paper'><input type='submit' value='Paper'></form>\n");
    res.write("<form method='POST' action='/play/scissors'><input type='submit' value='Scissors'></form>\n");
    res.write("<form method='POST' action='/play/lizard'><input type='submit' value='Lizard'></form>\n");
    res.write("<form method='POST' action='/play/spock'><input type='submit' value='Spock'></form>\n");    
    res.write("</body>\n");
    //res.write("</html>\n");
    res.end("</html>\n");
}


//routing after post to display score outcome and update json
function routePage(req, res){
    //not sure if i need this here or add later hm...
    res.writeHead(200, {"Content-Type": "text/html"});
    if(req.method === "POST" && req.url === "/play/rock"){
        checkInput("rock");
        gameResult(res);
    }
    else
    {
        bodyPage(res);
    }
}

//page with json object response 
function gameResult(res) {
    // temp = '{"outcome": ' + outcome + ', "wins": ' + wins + ', "losses": ' + losses + ', "ties": ' + ties + '}';
    // obj = JSON.parse(temp);

    // //res.writeHead(200, {"Content-Type": "text/html"});

    // res.write("<!DOCTYPE html>\n");
    // res.write("<html lang='en'>\n");
    // res.write("<head>\n");
    // res.write("<meta charset='utf-8'>\n");
    // res.write("<title>GAme Test</title>\n");
    // res.write("</head>\n");
    // res.write("<body>\n");
    // res.write("You chose: " + choice + "<br>\n");
    // res.write("AI chooses: " + aiChoice + "<br><br>\n");
    // res.write("Outcome: " + obj.outcome + "<br>\n");
    // res.write("Wins: " + obj.wins + "<br>\n");
    // res.write("Losses: " + obj.losses + "<br>\n");
    // res.write("Ties: " + obj.ties + "<br>\n");
    // res.write("<br><a href='../../''>Try again</a>\n");
    // res.write("</body>\n");
    // res.write("</html>\n");

}


server = http.createServer(routePage);

server.listen(3000);
 
console.log("Server is listening at port 3000");