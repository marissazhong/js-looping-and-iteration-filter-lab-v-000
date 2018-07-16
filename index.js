// Code your solution in this file

function findMatching(array, element) {
  return array.filter(function (item) {return item.toLowerCase() === element.toLowerCase()});
}
