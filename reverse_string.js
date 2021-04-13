function solution(str){
  var myArray = str.split('')
  var result = myArray.reverse();
  console.log(myArray);
  return result.join("");
}

console.log(solution("Lourenço"));
