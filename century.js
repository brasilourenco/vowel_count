function century(year) {
  var yearStr = year.toString();
  if (yearStr.length != 4){
    yearStr = "00" + yearStr;
  }

  var cent = yearStr.slice(0,2);
  var dec = yearStr.slice(2,yearStr.length);
  //console.log(dec);
  if (dec === "00"){
    return parseInt(cent);
  } else {
    return parseInt(cent) + 1;
  }
}
console.log(century(2009))
