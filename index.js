// Code your solution in this file

function findMatching(array, element) {
  return array.filter(function (item) {return item.toLowerCase() === element.toLowerCase()});
}

function fuzzyMatch(array, element) {
  return array.filter(function (item) {return item.toLowerCase[0,element.length] === element.toLowerCase()})
}
