function simples(str) {
  var carac = ['a','5','!'];
  var caracArr = carac.split('');

  for (var i = 0; i < caracArr.length; i++){
    if (caracArr[i] == 'a' || '5' ) {
      return caracArr[i]
    }
  }
}

console.log(simples('hello world'))
