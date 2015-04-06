var express = require("express"),
	http = require("http"),
	redis = require("redis"),
	redisClient,
	bodyParser = require('body-parser');
	app = express();

//redis client
client = redis.createClient();

//indext.hmtl file
app.use(express.static(__dirname + "/client"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

http.createServer(app).listen(3000);
console.log("sever started at localhost:3000");

//generate url 
function randomURL () {
	// body...
	//http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	//var text = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
	var text = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);
	return text;
}


//when person enters url
app.post("/geturl", function(req, res) {
	console.log("post called");
	//get the url from json
	var posturl = req.body.url0;
	var index = posturl.indexOf("localhost:3000"); //check if input is min url 
	if(index > -1)
	{
		//find the long url in redis to return 
	}
	else
	{
		var sorturl = randomURL();
		res.json({"url":sorturl});
		//new link to insert
		//long not exist
	}

	//res.json({"url":"test"});
	console.log("post suceesful");
});

//shuld update views of data on redis 
app.get("/url", function(req, res){
	console.log("get called");
});

//checks to see if url exist or redirects if it does exist



