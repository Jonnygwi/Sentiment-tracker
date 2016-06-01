// Test cases or text that has been input into webform
var text = "I was glad to go to the beach. Very glad. Even though was a miserable day.";
    

getSentiment(text);

function getSentiment(text){
    
    var punctuationless,
        finalString,
        finalStringLowercase,
        seporatedText = [];

    // Negative or positive word count
    var positiveWordCount = 0,
        negativeWordCount = 0;

    // Negative and Positive words
    var positiveWords = ["delight", "delighted", "delightful", "happy", "glad", "joy", "joyful", "merry", "pleasant"],
        negativeWords = ["disappointed", "miserable", "sad", "sorrow", "unhappy"];


    textSanitation(text);
    console.log("Final String: " + finalString);
    console.log("Array: " + seporatedText);
    textComparison();
    //sentiment();
      
    if (negativeWordCount < positiveWordCount) {
        return 3
        console.log("Happy")
        // Background will change to green if there is a positive analysis
    } else if (negativeWordCount == positiveWordCount){
        return 2
        console.log("Neutral")
        // Background will change to blue if there is a neutral analysis
    } else {
        return 1
        console.log("Sad")
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

    // Work out the sentiment
    function sentiment(){
        if (negativeWordCount < positiveWordCount) {
            return 3
            console.log("Happy")
            // Background will change to green if there is a positive analysis
//            document.body.style.backgroundColor = "green"; 
        } else if (negativeWordCount == positiveWordCount){
            return 2
            console.log("Neutral")
            // Background will change to blue if there is a neutral analysis
//            document.body.style.backgroundColor = "blue";
        } else {
            return 1
            console.log("Sad")
            // Background will change to red if there is a negative analysis
//            document.body.style.backgroundColor = "red";
        }
    }
};