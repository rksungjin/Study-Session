
    var num = [1, 6, 5, 10, 2]

    function peakElement(nums) {
      var startPt = nums[0];
      var maxPt = 0;
       for (i = 0; i < nums.length - 1; i++) {
          if (nums[i] > maxPt) {
            maxPt = nums[i]
          }
       }
           if (startPt >= maxPt) {
             return 0;
           }
           else {
             return maxPt;
           }
    }
 
    peakElement(num);
 // Sorted Array Solution - Last element
 // If array is sorted, we would just get the last element in the array as a peak element
   //  nums[nums.length - 1];
 
 
 
 
 // function peakEle(num) {
 // var num = [1, 6, 5, 10, 2];
 //   // var n = num.length;
 //   // var start = 0;
 //   // var end = n - 1;
 //   // var startPoint = num.indexOf(0);
 
 //   for(i = 1; i < num.length - 1; i++) {
 //         if (num[i] > num[i + 1])
 
 //     // if(startPoint > 0 && startPoint !== end)
 //     // if((num[i - 1] || num[i + 1] !== null) && (num[i - 1] < num[i]) && (num[i + 1] < num[i]))
 //     return i;
 //   }
 
 