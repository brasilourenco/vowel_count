var noSpace = function(str){
  //best practice
  //return x.split(' ').join('');
  //my solution
  //return str.slice(0,3) + str.slice(4,8) + str.slice(9,12)
  //other solution
  var myArray = str.split('')
  //var vowels = ['a', 'e', 'i','o','u'];
  var result = '';
  //console.log(myArray)
  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] != ' ') { 
      result = result + myArray[i];
    }
  }

return result;
}

console.log(noSpace('ola tudo bem'))
