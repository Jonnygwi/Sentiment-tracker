var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var server = http.createServer(app);

// Defining where to look for html templates
app.use(express.static(__dirname + '/public'));


app.listen(3000);

console.log("Server running on port 3000");

// posting information to node and responding with getSentiment function
app.use(bodyParser());
app.post('/', function(req, res) {
    // req.body.text is the text passed into the function
    getSentiment(req.body.text);
    res.send('<p>' + getSentiment(req.body.text) + '</p>');
});

function getSentiment(text){
    
    var punctuationless,
        finalString,
        finalStringLowercase,
        seporatedText = [];

    // Negative or positive word count
    var positiveWordCount = 0,
        negativeWordCount = 0;

    // Negative and Positive words accepted
    var positiveWords = ["delight", "delighted", "delightful", "happy", "glad", "joy", "joyful", "merry", "pleasant"],
        negativeWords = ["disappointed", "miserable", "sad", "sorrow", "unhappy"];


    textSanitation(text);
    console.log("Final String: " + finalString);
    console.log("Array: " + seporatedText);
    textComparison();
      
    // Work out the sentiment 
    if (positiveWordCount >= (negativeWordCount * 1.5) && positiveWordCount > 1){
        return "Happy"
        console.log("Happy")
        // Background will change to green if there is a positive analysis
    } else if (negativeWordCount >= (positiveWordCount * 1.5) && negativeWordCount > 1){
        return "Sad"
        console.log("Sad")
        // Background will change to blue if there is a neutral analysis
    } else {
        return "Unknown"
        console.log("Neutral")
        // Background will change to red if there is a negative analysis
    };
    

    // Sanitise the string: Remove punctuation, lowercase and split into items in an array
    function textSanitation(text){

        // Remove punction using regular expression
        punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        finalString = punctuationless.replace(/\s{2,}/g," ")

        // Lowercase the string
        finalStringLowercase = finalString.toLowerCase()

        // Function that seporates inputText into array of individual words
        seporatedText = finalStringLowercase.split(" ")  
    };

    function textComparison(){

        // For loop to roll through each item in the array and check against our array of words
        for (var i = 0; i < seporatedText.length; i++){

            // Positive word loop        
            for (var p = 0; p < positiveWords.length; p++){

                if (seporatedText[i] == positiveWords[p]) {

                    positiveWordCount ++
                }
            };

            // Negative word loop
            for (var n = 0; n < negativeWords.length; n++){

                if (seporatedText[i] == negativeWords[n]) {

                    negativeWordCount ++
                }
            };
        }

        // Log the value of each variable    
        console.log("Negative words: " + negativeWordCount)
        console.log("Positive words: " + positiveWordCount)
    };
};

server.listen(process.env.PORT, process.env.IP);
