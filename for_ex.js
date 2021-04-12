var str = "jjjjjjjjjjsdfiohdsugfaycfdscsdhcdsygc"
var count = 0;
var lettersArr = str.split('')

for(var i = 0; i < lettersArr.length; i++){
  if (lettersArr[i] == 'a'){
    count++
  }
}
console.log(count)
