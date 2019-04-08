// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


function Word(word) {
  //word.split = splits word into array of letters. 
  //    .map = instatiate a new "letter" for each character and return an array. 
  //    this.letter is a "SMART" array
  this.letter = word.split("").map(function(char){
    return new letter(char);
  })

  //so this is no longer only an array of letter but an array of lettr objects. 
}

Word.prototype.getSolution = function() {
  return this.letters.map(functin(letter) {
    console.log("word.js word.porotype.getSolution works")
  })
}

Word.prototype.guessedCorrectly = function () {
  
}