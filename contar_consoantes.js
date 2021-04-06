function contarConsoante(str){
  var consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y'
  ,'z'];
  var lettersArr = str.split('');
  var count = 0;

  for(var i = 0; i < lettersArr.length; i++){
      if (consoantes.includes(lettersArr[i])){
        count++;
      }
  }
  return count;
}

console.log(contarConsoante('l'));
