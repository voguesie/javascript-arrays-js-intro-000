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

function addElementToEndOfArray(arr, endElement) {
var newArr = arr.push(endElement);
return newArr
}

function destructivelyAddElementToEndOfArray(arr, endsElement) {
return arr.push(endElement)
}
