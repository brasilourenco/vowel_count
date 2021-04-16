var targetDisk = [ 'E', 'ø', '-', 'C', 'ø', 'o', 'r', 'ø', 'ø', 'p', '\'', 'ø', 's', ' ', 'E', 'v', 'ø', 'i', 'ø', 'ø', 'l'];
  var newDisk = [];

  for(var i = 0; i < targetDisk.length; i++){
    if (targetDisk[i] !== 'ø'){
      newDisk.push(targetDisk[i]);
    }
  }

var result = newDisk.join("");
console.log(result);
