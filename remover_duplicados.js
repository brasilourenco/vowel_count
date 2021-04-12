function duplicados(str) {
  var letters = str.split('');
  var resultArray = [];

  for (var i = 0; i < letters.length; i++){
    if (resultArray.includes(letters[i])){
      continue;
    } else {
      resultArray.push(letters[i])
    }
  }
  return resultArray.join('');
}

console.log(duplicados('hello world'))
