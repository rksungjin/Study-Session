
// Missing 1 number
//create variables and array of numbers
var numberSet = []; //<---- number array; 1-100
var firstSum = 0; 
//run for loop to find total less sum -- missing number(s)
for(var i = 0; i < numberSet.length; i++){
    firstSum = firstSum + numberSet[i];
}
console.log(firstSum);

var secondSum = 0;
//run for loop to find total sum
for(var n = 1; n < 100; n++){
    secondSum = secondSum + [n];
} 
console.log(secondSum);
//total minus total less sum equals missing number
console.log("missing number is >>>" + secondSum - firstSum);  

// Missing 2 numbers
var numbers = [0,1,3,4,5,7,8];
var missing = [];

//run for loop to find missing number
for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i+1] - numbers[i]) > 1 ) {
        missing.push(numbers[i + 1] - numbers[1]);   
    }
}
//[2,6]
console.log("missing numbers >>>" + missing);








// // The output of the function should be 8
// var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// var upperBound = 9;
// var lowerBound = 1;

// findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

// function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
//   // Iterate through array to find the sum of the numbers
//   var sumOfIntegers = 0;
//   for (var i = 0; i < arrayOfIntegers.length; i++) {
//     sumOfIntegers += arrayOfIntegers[i];
//   }
// }