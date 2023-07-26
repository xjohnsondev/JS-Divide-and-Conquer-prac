// Given a sorted array and a number, write a function called sortedFrequency 
// that counts the occurrences of the number in the array

function sortedFrequency(arr, num) {
    return arr.filter(function(n){
        return n === num
    }).length
}

module.exports = sortedFrequency