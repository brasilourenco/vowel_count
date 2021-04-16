function digital_root(n) {
  var str =  n.toString();
  var arrays = str.split('');

  var result = 0;

 for(var i = 0; i < arrays.length; i++){
   result = result + parseInt(arrays[i]);
}

  if (result >= 10){
    return digital_root(result);
  }
 return result;
}

console.log(digital_root(335));
