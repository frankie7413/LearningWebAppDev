var main = function() {
	"user strict";

	$("#rock").click(function() {
		processPost("/play/rock");
	});

	$("#paper").click(function() {
		processPost("/play/paper");
	});	

	$("#scissors").click(function() {
		processPost("/play/scissors");
	});

	$("#lizard").click(function() {
		processPost("/play/lizard");
	});

	$("#spock").click(function() {
		processPost("/play/spock");
	});
};

function generateResponse(gameresult) {
	var $resultstr = $("<p>"),
		$player = $("<p>").text("Player Choice: " + gameresult.playerchoice),
		$aiplayer = $("<p>").text("AI Choice: " + gameresult.aichoice),
		$feedback = $("<h3>").text("You " + gameresult.outcome + " gg!"),
		$description = $("<h3>").text("Game Stats & Scores:"),
		$content = $("<ul>"),
		$listoutcome = $("<li>").text("Outcome: " + gameresult.outcome),
		$listwin = $("<li>").text("Wins: " + gameresult.wins),
		$listloss = $("<li>").text("Losses: " + gameresult.losses),
		$listties = $("<li>").text("Ties: " + gameresult.ties);

		$content.append($listoutcome).append($listwin).append($listloss).append($listties); 
		$resultstr.append($feedback).append($player).append($aiplayer).append($description).append($content);
		console.log("----------------get json----------------------------");

		return $resultstr;
}



function processPost(Post) {
	var $result;

	$.getJSON(Post, function(gameresult) {
		$("main .result").empty(); //clears previous html code
		$result = generateResponse(gameresult); //update html code
		$("main .result").append($result).append($reset);
	});
}

$(document).ready(main);