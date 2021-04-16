/*function countSheeps(arrayOfSheep) {
    var array = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];

    var count = 0;

    for(var i = 0; i < array.length; i++){
      if(array[i] == true){
        count++;
      }  else if (array == null){
          return [];
        } else if (array == undefined){
            return [];
          }
    }
    return count;
}*/
 //or

 function countSheeps(arrayOfSheep) {
  var count = 0;

    for(var i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == true){
        count++;
      }  else if (arrayOfSheep == null){
          return [];
        } else if (arrayOfSheep == undefined){
            return [];
          }
    }
    return count;
}
