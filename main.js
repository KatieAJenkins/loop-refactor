'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions:
  map: loops through all of array and modify
  filter: new array with all elements that pass a test
  reduce: loop through and do something with starting base
  every: check if every element in array passes a test
  some: checks if some element in array passes test

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

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(arrProp){
      if(arrProp.hasOwnProperty(prop)){
        console.log(true);
        return true;
      }
        console.log(false);
        return false;
    });
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
      var personObject = {};
      personObject.first = name[0];
      personObject.last = name[1];
      return personObject;
    });
  },

  objContainsProp: (arr, prop) => {
    for (var i = 0; i < arr.length; i++){
      if(!arr[i].hasOwnProperty(prop)){
        return false;
      }
    }
    return true;
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(arrProp) {
      if(arrProp.hasOwnProperty(prop)){
        return true;
      }
        return false;
    });
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

  stringMatch: (array, string) => {
    return array.filter(function(element) {
      console.log(element);
      return element.toLowerCase().indexOf(string.toLowerCase()) > -1;
    });
  }

}
