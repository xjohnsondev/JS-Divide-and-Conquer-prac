// Write a function called findRotationCount 
// which accepts an array of distinct numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times. 
// Given such an array, find the value of n.

function findRotationCount(arr) {
    let min = Math.min(...arr)
    let result = arr.indexOf(min);
    return result;
}

module.exports = findRotationCount