//giving an array of numbers in a range 1...n-1 while n is the length of the array, find the number that appears twice

/**
 * 
 * @param {Array<number>} arr 
 * @returns 
 */
const findSecondOccurence = (arr) => {
    // if the numbers are between 1 and n-1, and there's only one number that appears twice, then all the numbers in the range 1...n-1 are sequential
    // example: an array of length 5, the numbers are 1,2,3,4,x and x is the number that appears twice
    // a simple solution is calculating the sum of all the numbers inside the array and then subtracting the sum of the numbers in the range 1...n-1 and we'll have our x
    // arr.reduce((a, b) => a + b) is for calculating the sum of the array
    // a math solution for calculating numbers from 1 to n is n(n+1)/2 and from 1 to n-1 is n(n-1)/2
    // n(n-1)/2 --> arr.length * ((arr.length - 1) / 2) is for calculating the sum of the numbers in the range 1...n-1 
    return arr.reduce((a, b) => a + b) - arr.length * ((arr.length - 1) / 2);
}

console.log(findSecondOccurence([2, 6, 5, 4, 3, 2, 1]))