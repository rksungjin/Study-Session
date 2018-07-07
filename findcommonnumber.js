//frequent element in an array
var test = [1, 2, 2, 3, 5];

function find_most_frequent_element(arr) {
var frequency = {};
for (i=0; i < arr.length; i++){
  if (frequency[arr[i]])
  {
    frequency[arr[i]] = frequency[arr[i]] + 1;
  }  else {
    frequency[arr[i]] = 1;
  }
}
return Math.max (Object.values(frequency));
} // 2
find_most_frequent_element(test);