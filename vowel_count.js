/*function getCount(str) {
  var vowelsCount = str.split('');
  var count = 0;

  for (var i = 0; i < vowelsCount.length; i++){
    if (vowelsCount[i] == 'a') {
      count++;
    } else if (vowelsCount[i] == 'e') {
      count++;
    } else if (vowelsCount[i] == 'i') {
      count++;
    } else if (vowelsCount[i] == 'o') {
      count++;
    } else if (vowelsCount[i] == 'u') {
      count++;
    }
  }
  return count;
}

console.log(getCount('hello world'))*/

function getCount(str) {
  var vowels = ['a','e','i','o','u'];
  var lettersArr = str.split('');
  var count = 0;

  for (var i = 0; i < lettersArr.length; i++){
    if (vowels.includes(lettersArr[i])) {
      count++;
    }
  }
  return count;
}

console.log(getCount('hello world'))
