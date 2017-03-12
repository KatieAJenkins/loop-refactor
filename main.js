'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions:
  map:
  filter: new array with all elements that pass a test
  reduce: loop through and do something with starting base
  every: check if every element in array passes a test
  some:

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = base;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  },

  sum: (arr, base) => {
    var sum = arr.reduce(function(begSum, number) {
      return begSum + number;
    }, base);
    return sum;
  },

  someObjsContainProp: (arr, prop) => {
    for(var i = 0; i < arr.length; i++){
      if(arr[i].hasOwnProperty(prop)){
        return true;
      }
    }
    return false;
  },

  convertNameArrayToObject: (arr) => {
    let nameObj = [];
    for(var i = 0; i < arr.length; i++){
      let obj = {};
      obj.first = arr[i][0];
      obj.last = arr[i][1];
      nameObj.push(obj);
    }
    return nameObj;
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function(name) {
    let obj = {};
      // console.log(name[0]);
      // console.log(name[1]);
      // console.log(obj);
      obj.first = name[0];
      obj.last = name[1];
      console.log(obj);
      // nameObject.first = name[0];
      // nameObject.last = name[1];
      // nameObject.push(obj);
      // console.log(obj);
      // console.log(nameObject);
      return obj;
    });
    var arrObjects = [];
    //  arrObjects.push(obj);
    // return nameObject;
    // return nameObject;
  },

  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  stringMatch: (arr, str) => {
    let matches = [];
    for(var i = 0; i < arr.length; i++){
      if (arr[i].includes(str)){
        matches.push(arr[i]);
      }
    }
    return matches;
  },

  // stringMatch: (arr, str) => {
  //   let matches = []; arr.map(function(arrayString) {
  //     if (str === arrayString){
  //       matches.push(arrayString);
  //     }
  //     return matches;
  //   });
  // }
}
