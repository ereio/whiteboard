/**
 * initialize your data structure here.
 */
const MedianFinder = function () {
  this.nums = [];
  this.length = 0;
  this.current = null;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const { nums } = this;
  const { length } = nums;

  if (!length) {
    this.nums.push(num);
    return;
  }

  if (length === 1) {
    this.nums = nums[0] > num ? [num, ...nums] : [...nums, num];
    return;
  }

  const middle = Math.floor(length / 2);
  let index = length % 2 ? middle - 1 : middle;
  
  console.log('[addNum] middle', index);

  for (let i = length; i >= 1; i /= 2) {
    const lookup = nums[index];
 
    console.log('[addNum] up', num, lookup, index);

    if (lookup < num) {
      index += Math.floor((index / 2));
      console.log('[addNum] lt', num, lookup, index);
    } else if (lookup > num) {
      index = Math.floor(index / 2);
      console.log('[addNum] gt', num, lookup, index);
    }

    if ((i / 2) < 1) {
      console.log('[addNum] result', index, num);
      this.nums.splice(index, 0, num);
      return;
    }
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const { nums } = this;
  const { length } = nums;
  
  if (!this.nums.length) return 0;

  const index = Math.floor(length / 2);

  if (nums.length % 2) {
    this.current = nums[index];
  } else {
    this.current = (nums[index - 1] + nums[index]) / 2;
  }
  
  console.log('[findMedian]', this.current, this.nums);
  return this.current;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const finder = new MedianFinder();
 
// finder.addNum(1);
// finder.addNum(2);
// finder.findMedian();
// finder.addNum(3);
// finder.findMedian();

finder.addNum(6);
finder.findMedian();
finder.addNum(10);
finder.findMedian();
finder.addNum(2);
finder.findMedian();
finder.addNum(6);
finder.findMedian();
finder.addNum(5);
finder.findMedian();
finder.addNum(0);
finder.findMedian();

// ['MedianFinder', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian', 'addNum', 'findMedian']
//   [[], [6], [], [10], [], [2], [], [6], [], [5], [], [0], [], [6], [], [3], [], [1], [], [0], [], [0], []];
