function highAndLow(numbers){
  var numbersArr = numbers.split(' ')
  var high = parseInt(numbersArr[0]);
  var low  = parseInt(numbersArr[0]);
  //console.log(numbersArr)

  for(var i = 0; i < numbersArr.length; i++){
    if (parseInt(numbersArr[i]) > high){
      high = parseInt(numbersArr[i]);
    }
    if (parseInt(numbersArr[i]) < low){
        low = parseInt(numbersArr[i]);
    }
  }
  return high  + " " + low;
}

console.log(highAndLow("4 5 29 54 4 -214 0 542 64 1 3 6 -6"))
