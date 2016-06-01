# Sentiment-tracker

## Running the app
1. Open the master directory in terminal and type `node server` to run the server.

2. Navigate to localhost:3000 in your browser

3. Enter the sentence you want to analyse and it will reply with whether it is Happy, Sad or Unkown

The words that are recognised as being Happy are - delight, delighted, delightful, happy, glad, joy, joyful, merry and pleasant.
The words that are recognised as being Sad are - disappointed, miserable, sad, sorrow and unhappy.

To be classed as happy or sad there has to be a ratio of 1.5 more respective words then its counter.

Unit test cases

	"I was glad to go to the beach. Very glad. Even though it was a miserable day.",
	"Such a delightful day... I'm glad I spent it with you",
	"Yesterday... all my troubles seemed so far away",
  	"The weather yesterday made me sad",
  	"The only thing I ever got from you was sorrow",
  	"I'm disappointed in you, but anyway, Merry Christmas"
