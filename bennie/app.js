var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!")
});

// Visiting "/speak/pig" should print "The pig says 'Oink'" Visiting "/speak/cow" should print "The cow says 'Moo'" Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var says = {pig:"'Oink'", cow:"'Moo'", dog:"'Woof Woof!'", goose:"'Honk!'", }
	res.send("the " + animal + " says " + says[animal] || "I don't know what " + animal + " says");
});
// Visiting "/repeat/hello/3" should print "hello hello hello" Visiting "/repeat/hello/5" should print "hello hello hello hello hello" Visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:word/:times", function(req, res){
	let word = req.params.word;
	let times = req.params.times;
	var wordtimes = "";
	for(let i = 0; i < times; i++){
		var wordtimes = word + " " + wordtimes;
	}
	res.send(wordtimes);
});

// If a user visits any other route, print: "Sorry, page not found...What are you doing with your life?"
app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
	console.log("catch all")
});

// Tell Express to listen for requests (start server)
app.listen(4000, function() { 
  console.log('Server listening on port 4000'); 
});