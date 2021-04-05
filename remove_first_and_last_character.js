/*var removeChar = function(str){
  return str.slice(0, str.length - 2) + str.slice(str.length - 1) //0-1 ; 0-(-1)
};

console.log(removeChar('alfredino'));
console.log(removeChar('teotonio'));
console.log(removeChar('andre'));
console.log(removeChar('bartolomeu'));*/


var removeChar2 = function(str){
  return str.slice(0,1) + str.slice(2, str.length - 2) + str.slice(str.length - 1)
}

console.log(removeChar2('alfredino'));
console.log(removeChar2('teotonio'));
console.log(removeChar2('andre'));
console.log(removeChar2('bartolomeu'));
