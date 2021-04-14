function find_average(array) {
  var result = 0;
  var average = 0;

  for(var i = 0; i < array.length; i++){
    result = result + array[i];
  }

  average = result / array.length;
  return average;
}

console.log(find_average([1,2,3]));
