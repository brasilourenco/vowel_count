function digital_root(n) {
  var str =  n.toString();
  var arrays = str.split('');
  var num = parseInt(arrays);
  var result = 0;
  console.log(num);

 for(var i = 0; i < arrays.length; i++){
   result = result + arrays[i];
}

}

console.log(digital_root(12))
