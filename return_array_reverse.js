function digitize(n) {
  var str = n.toString();
  var array = str.split('');
  var result = array.reverse();

  return result;
}

console.log(digitize(35231));
