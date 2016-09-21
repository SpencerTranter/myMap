function myMap(array, cb){
  var newArray = [];
  for(var i = 0; i < array.length; i ++){
    newArray.push(cb(array[i]));
  }
  return newArray;
}

var arr = [1, 2, 3, 4];
function callBack(num){
  return num + 1;
}

console.log(myMap(arr, callBack));