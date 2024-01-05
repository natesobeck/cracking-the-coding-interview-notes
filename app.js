// Big O -- Chapter 6

// Space Complexity

function sum(int) {
  if (int <= 0) {
    return 0
  }
  console.log(int)
  return int + sum(int - 1)
}
/* The above function sum has a space complexity of O(n) and a time complexity of O(n). This is because recursion makes calls appear simultaneously in the stack. So it looks like this:

sum(4)
  4 !<= 0 so
  return 4 + sum(3)
    3 !<= 0 so
    return 3 + sum(2)
      2 !<= 0 so
      return 2 + sum(1)
        1 !<= 0 so
        return 1 + sum(0)
          0 <= 0 so
          return 0

Since these calls are reliant on the result of the other calls, they exist in the stack simultaneously

*/

function pairSum(int1, int2) {
  return int1 + int2
}

function pairSumSequence(int) {
  let sum = 0
  for (let i = 0; i < int; i++) {
    sum += pairSum(int, int + 1)
  }
  return sum
}

/*
The above functions only take up O(1) space complexity because the calls do not exist simultaneously in the call stack. These calls take place in sequence. It looks like this:

pairSumSequence(4)
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1) so...
    
    sum += (0 + 1) so sum = 1
    sum += (1 + 2) so sum = 4
    sum += (2 + 3) so sum = 9
    sum += (3 + 4) so sum = 16

    Now, since i = 4 and 4 !< 4 the loop breaks with sum = 16
  }
  return sum
*/