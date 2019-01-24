
//O(n^2) time
//use two loops to iterate through array ...
//and check if each integer plus every other integer sums to the target value
  var targetTwoSum = (arr, target) => {
    var results = [];
    for (var i=0; i<arr.length; i++) {
      for (var j=i+1; j<arr.length; j++) {
        if (arr[j] === target - arr[i]) {
          results.push([arr[i], arr[j]])
        }
      }
    }
    return results;
  }









  // //binary search
// const binarySearch = (sortedArr, target) => {
//     var min = 0,
//         max = sortedArr.length - 1,
//         guess;
  
//     while (min <= max) {
//       guess = Math.floor((min + max) / 2);
  
//       if (sortedArr[guess] === target) {
//         return guess;
//       } else {
//         if (sortedArr[guess] < target) {
//           min = guess + 1;
//         } else {
//           max = guess - 1;
//         }
//       }
//     }
//     return false;
//   }
