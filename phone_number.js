function createPhoneNumber(numbers){
  var str = numbers.join("");
  var result = "";
  var par = numbers.slice(0,3);
  var out = numbers.slice(3,6);
  var rigth = numbers.slice(6,10);

return "(" + par.join("") + ")" + " " + out.join("") + "-" + rigth.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
