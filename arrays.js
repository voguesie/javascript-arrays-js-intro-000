var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr, addElement) {
var newArr = arr.unshift(addElement);
return newArr
}

function destructivelyAddElementToEndOfArray(arr, addElement) {
return arr.push(addElement)
}
