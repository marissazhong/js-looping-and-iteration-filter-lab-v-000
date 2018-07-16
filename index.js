// Code your solution in this file

function findMatching(array, element) {
  return array.filter(function (item) {return item.toLowerCase() === element.toLowerCase()});
}

function fuzzyMatch(array, element) {
  console.log(array[0][0,element.length-1]);
  return array.filter(function (item) {return item[0,element.length-1] === element})
}

drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
fuzzyMatch(drivers, 'Sa');
