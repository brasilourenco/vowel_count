function duplicados(str) {
  var letters = str.split('');
  for (var i = 0; i > letters.length; i++){
    if (letters[i] * 2){
      return letters.splice(letters[i] * 2);
    }
}
}

console.log(duplicados('hello'))
