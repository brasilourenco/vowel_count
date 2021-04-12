function simple(str) {
  var charac = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];
  var lettersArr = str.split('');
  var result = [];
  console.log(lettersArr)

  var i;
  for(i = 0; i < lettersArr.length; i++){
    if (charac.includes(lettersArr[i].toLowerCase())){
      result.push(lettersArr[i])
      }
    }
    return result.join("");
  }
console.log(simple('Hell0 world!'))
