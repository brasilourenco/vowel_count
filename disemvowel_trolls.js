function disemvowel(str) {
  var vowels = ['a','e','i','o','u'];
  var lettersArr = str.split('');
  var result = [];

  for(var i = 0; i < lettersArr.length; i++){
    if (vowels.includes(lettersArr[i].toLowerCase())){
      continue;
    } else {
        result.push(lettersArr[i])
      }
    }
  return result.join("");
}
console.log(disemvowel("This website is for losers LOL!"));
