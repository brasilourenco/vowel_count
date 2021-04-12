function solution(number){
  var result = 0;

  for(var i = 0; i < number ; i++){
    console.log("indice: " + i)
    if (i % 3 === 0 || i % 5 === 0){
      result = result + i
      console.log("result: " + result);
    }
  }
  return result;
  }
console.log(solution("10"));
/*console.log(solution(50));
console.log(solution(30));*/
