// This function takes no arguments and uses the existing tutorials array as data.
// It returns a new array with the tutorial names converted to title case (capitalized first letter of each word).

function titleCased() {
  // use map() to iterate over each tutorial name in the array
  return tutorials.map(function(tutorial) {
    // use split() to convert the string into an array of words
    let words = tutorial.split(' ');
    // use map() again to iterate over each word in the array
    // use slice() to capitalize the first letter of each word and concatenate with the rest of the word
    let titleCaseWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // use join() to convert the array of words back into a string and return the title case tutorial name
    return titleCaseWords.join(' ');
  });
}

// Example usage:
console.log(titleCased());
/* Output:
<
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
> */