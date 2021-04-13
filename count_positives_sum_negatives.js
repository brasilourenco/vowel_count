function countPositivesSumNegatives(input) {
  var count = 0;
  var sum = 0;
  var result = [];

  if (input == null){
    return [];
  } else if (input.length === 0){
    return [];
  }

  for(var i = 0; i < input.length; i++){
    if (input[i] === 0){
      continue;
    }
    else if(input[i] >= 0){
      count++
      console.log(count);
    } else {
      sum = sum + input[i];
    }
  }
  result.push(count, sum);
return result;
}

console.log(countPositivesSumNegatives([]))
