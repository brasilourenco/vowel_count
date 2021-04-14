function duplicateCount(text){
  var letters = text.split('');
  var resultArray = [];
  var count = 0;

  for (var i = 0; i < letters.length; i++){
    if (resultArray.includes(letters[i].toLowerCase())){
      count++;
      continue;
    } else {
      resultArray.push(letters[i].toLowerCase())
    }
  }
  return count;
}

console.log(duplicateCount("helLo"))
