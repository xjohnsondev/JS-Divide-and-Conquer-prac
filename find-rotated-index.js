// Write a function called findRotatedIndex 
// which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. 
// If the value is not found, return -1.

function findRotatedIndex(arr, num) {
    let result = arr.indexOf(num);
    return result;
}

module.exports = findRotatedIndex