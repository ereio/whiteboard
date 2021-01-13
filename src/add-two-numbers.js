/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
const addTwoNumbers = function (l1, l2) {
  let total;
  let current;
  let sum = 0;
  let remainder = 0;
  
  while (l1 !== null || l2 !== null || remainder > 0) {
    sum = 0;
    
    if (remainder > 0) {
      sum += remainder;
      remainder = 0;
    }
        
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
      
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    remainder = Math.floor(sum / 10);
    sum %= 10;
 
    if (total == null) {
      total = new ListNode(sum);
    } else {
      current.next = new ListNode(sum);
    }
    
    // by checking the total list like this, you avoid an empty placeholder object
    current = total.next == null ? total : current.next;
  }
  
  return total;
};

const t1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const t2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(t1, t2));
