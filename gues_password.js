function guessPassword(){
  var correctGuesses = 0;
  var guessedChars = Math.floor(Math.random() * 3) + 1;
  var attmpts = 0;

  while(correctGuesses < 4){
    if (guessedChars == 4){
      console.log("Terminal Hacked!");
    }

    if (guessedChars < 4){
      attmpts++;
    }

    if (attmpts == 5){
      console.log("Too many attempts");
      break;
    }
  }
}
