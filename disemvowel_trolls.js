function disemvowel(str) {
  var vowels = ['a','e','i','o','u'];
  var lettersArr = str.split('');

  for(var i = 0; i < lettersArr.length; i++){
    if (vowels.includes(lettersArr[i])){
      vowels = vowels + lettersArr[i];
    }
  }
  return vowels.slice(5);
}
console.log(disemvowel("This website is for losers LOL!"));
