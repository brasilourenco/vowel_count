function updatedPass(day, currentPass){
  var result = ""; //luchomnd
  result = result + currentPass;
  var arrVowels = ['a','e','i','o','u','y'];
  var array = day.split('');
  console.log(array)
  for(var i = 0; i < array.length; i++){
    if (arrVowels.includes(array[i])){
      continue;
    } else {
      result = result + array[i];
    }
  }

return result;
}


console.log(updatedPass('sunday','lucho'))
