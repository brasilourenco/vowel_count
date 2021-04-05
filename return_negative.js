var makeNegative = function (num) {
  //best practice
  //return -Math.abs(num)
  //my solution
  if (num === 0){
    return 0;
} else if (num > 0) {
    return (-num);
  } else {
    return num
  }
}

console.log(makeNegative(0))
console.log(makeNegative(-143))
console.log(makeNegative(1))
