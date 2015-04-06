var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	redisClient,
	app = express();

//redis client
client = redis.createClient();

//indext.hmtl file
app.use(express.static(__dirname + "/client"));

http.createServer(app).listen(3000);


//generate url 
function randomURL () {
	// body...
	//http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	//var text = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
	var text = Math.random().toString(36).substr(2, 5);
	return text;
}


//when person enters url



//checks to see if url exist or redirects if it does exist



