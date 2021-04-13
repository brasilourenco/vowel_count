function accum(s) {
  var arr = s.split('');
  var result = [];
  console.log(arr);

  for(var i = 0; i < arr.length; i++){
    result.push(arr[i].repeat(i+1));
    }
    return result;
  }
console.log(accum('abCd'));
