function countPigs(arr){
  var count = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] == "pigs"){
    count ++;
  }
}
  return count;
}
var animals = ["pigs", "goats", "sheep", "cows","pigs", "goats", "sheep", "cows","pigs", "goats", "sheep", "cows","pigs", "goats", "sheep", "cows"];
var potato = ["goats", "sheep", "cows","pigs", "goats", "sheep", "cows"];
var cats = ["pigs", "goats"];
var dogs = [];
console.log(countPigs(animals));
console.log(countPigs(potato));
console.log(countPigs(cats));
console.log(countPigs(dogs));
