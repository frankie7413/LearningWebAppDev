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
	var $resultstr = $("<p>").text("Game Stats & Scores:"),
		$player = $("<p>").text("Player Choice: " + gameresult.playerchoice),
		$aiplayer = $("<p>").text("AI Choice: " + gameresult.aichoice),
		$content = $("<ul>"),
		$listoutcome = $("<li>").text("Wins: " + gameresult.outcome),
		$listwin = $("<li>").text("Losses: " + gameresult.wins),
		$listloss = $("<li>").text("Ties: " + gameresult.losses),
		$listties = $("<li>").text("Outcome: " + gameresult.ties);

		$content.append($listoutcome).append($listwin).append($listloss).append($listties); 
		$resultstr.append($player).append($aiplayer).append($content);
		console.log("----------------get json----------------------------");

		return $resultstr;
}

function processPost(Post) {
	var $result;

	$.getJSON(Post, function(gameresult) {
		$("main .result").empty(); //clears previous html code
		$result = generateResponse(gameresult); //update html code
		$("main .result").append($result);
	});
}

$(document).ready(main);