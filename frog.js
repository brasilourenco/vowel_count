var mouthSize = function(animal) {
  if (animal.toLowerCase() == 'alligator') {
    return 'small';
} else {
    return 'wide';
  }
}

console.log(mouthSize('Alligator'))
console.log(mouthSize('dog'))
console.log(mouthSize('cat'))
console.log(mouthSize('donkey'))
