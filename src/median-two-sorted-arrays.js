/* eslint-disable no-plusplus */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let total = 0;
  let median = 0;
  const condensed = [];
  const totalNums = nums1.length + nums2.length;

  for (; total < totalNums; total++) {
    const num1 = nums1[i];
    const num2 = nums2[j];
     
    if (nums2[j] < num1 || num1 === undefined) {
      for (; j < nums2.length && (nums2[j] < num1 || num1 === undefined); j++) {
        condensed.push(nums2[j]);
      }
    } else if (num1 !== undefined) {
      condensed.push(num1);
      i++;
    }
  }

  if (totalNums % 2) {
    const index = Math.floor(totalNums / 2);
    median = condensed[index];
  } else {
    const index = Math.floor(totalNums / 2);
    median = (condensed[index - 1] + condensed[index]) / 2;
  }

  return median;
};

console.log(findMedianSortedArrays([0, 0], [0, 0]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
