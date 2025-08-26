

 // Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while(l1 !== null || l2 !== null || carry > 0 ) {
            let sum = carry;

            if(l1 !== null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if(l2 !== null) {
                sum +=l2.val;
                l2 = l2.next;
            }

            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);
            current = current.next;


        }

        return dummy.next;

};
// ====== Your ListNode + addTwoNumbers code here ======

// Helper

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}


// Helper2
function listToArray(node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

// Example:
let l1 = arrayToList([2,4,3]);  // 342
let l2 = arrayToList([5,6,4]);  // 465

let result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // 👉 [7,0,8]
