const arr = [8, 0, -2, 5, 8, -3];
function allTwoSum (arr, target) {
   const map = {};
   const results = [];
   for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]]) {
         results.push([target-arr[i],arr[i]]);
         continue;
      };
      map[target - arr[i]] = true;
   };
   return results;
};
console.log(allTwoSum(arr, 5));