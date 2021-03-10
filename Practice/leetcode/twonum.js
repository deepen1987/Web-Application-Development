// twoSum num and target general appraoch

let twoSum = function (num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j <= num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
};

let num1 = [2, 3, 4];
let target1 = 7;

console.log(twoSum(num1, target1));

// twoSum num and target using object

const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

let nums = [3, 2, 4];
let target1 = 7;

console.log(twoSum(nums, target1));

document.addEventListener("DOMContentLoaded");
