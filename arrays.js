var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, addElement) {
var newArr = [addElement, ...arr];
return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, addElement) {
return arr.unshift(addElement)
}

function addElementToEndOfArray(arr, endElement) {
var newArr = [...arr, endElement];
return newArr
}

function destructivelyAddElementToEndOfArray(arr, endElement) {
return arr.push(endElement)
}

function accessElementInArray(arr, arrIndex) {
  return arr[arrIndex]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}
