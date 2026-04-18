## ✅ Q94 – Leetcode 268: **Missing Number**

```javascript
var missingNumber = function(nums) {
    let i = 0;

    // Loop through all elements
    while (i < nums.length) {
        let correct = nums[i]; 
        // Each number should be at index equal to its value

        if (nums[i] < nums.length && nums[i] !== nums[correct]) {
            // Only swap if the number is within the range [0, n-1] and not in the correct place

            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
            // Swap current element to its correct index
        } else {
            i++;
            // If it's already in the right place or out of range, move to next index
        }
    }

    // Now check which index doesn't have the correct number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
            // This index should contain the number i, but it doesn't — so i is the missing number
        }
    }

    return nums.length;
    // If all numbers from 0 to n-1 are in place, then missing number is n
};
```

---

## ✅ Q95 – Leetcode 448: **Find All Numbers Disappeared in an Array**

```javascript
var findDisappearedNumbers = function(nums) {
    let i = 0;

    // Sort numbers so that each x is at index x-1
    while (i < nums.length) {
        let correct = nums[i] - 1;
        // The correct index for nums[i] is nums[i] - 1

        if (nums[i] !== nums[correct]) {
            // If it's not at the correct position, swap it

            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
            // If it’s already in the right spot, just move to the next element
        }
    }

    // After cyclic sort, check for mismatches
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
            // Index i should have value i+1; if not, that number is missing
        }
    }

    return result;
};
```

---

## ✅ Q96 – Leetcode 41: **First Missing Positive**

```javascript
var firstMissingPositive = function(nums) {
    let i = 0;

    // Goal: put each positive number x at index x - 1
    while (i < nums.length) {
        let correct = nums[i] - 1;

        // Only swap if number is in range [1, n] and not already at its correct index
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[i] !== nums[correct]
        ) {
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp;
        } else {
            i++;
            // Skip invalid or already placed numbers
        }
    }

    // After placing, find the first index i where nums[i] !== i + 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
            // i + 1 is the first missing positive number
        }
    }

    return nums.length + 1;
    // If all 1 to n are present, return n + 1
};
```

---

## 📌 Key Cyclic Sort Logic

```js
while (i < nums.length) {
    let correct = index where nums[i] should be;

    if (nums[i] is valid and not at correct index) {
        swap(nums[i], nums[correct])
    } else {
        i++;
    }
}
```

// Binary Search

### ✅ **Q98 — Leetcode 35: Search Insert Position**

**🧠 Problem:**
Given a **sorted** array and a target value, return the **index if found**, or the **index where it should be inserted** to maintain the order.

---

### 🔍 Algorithm (Step-by-step):

1. Use **binary search** on the array.
2. Maintain `start` and `end` pointers.
3. On each step:

   * Calculate `mid = Math.floor((start + end) / 2)`
   * If `target == nums[mid]`, return `mid`
   * If `target < nums[mid]`, move left → `end = mid - 1`
   * If `target > nums[mid]`, move right → `start = mid + 1`
4. If not found, the insert position is at `start`.

---

### ✅ Code:

```javascript
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // If target not found, return insert position
    return start;
};
```

---

### ✅ **Q99 — Leetcode 34: First and Last Position of Element in Sorted Array**

**🧠 Problem:**
Find the **first and last index** of a given target in a sorted array.

---

### 🔍 Algorithm (Step-by-step):

1. Perform two binary searches:

   * One to find the **first occurrence**
   * Another to find the **last occurrence**
2. In both, adjust the binary search conditions slightly:

   * For first: search left even when target is found.
   * For last: search right even when target is found.

---

### ✅ Code:

```javascript
function searchRange(nums, target) {
    return [findIndex(nums, target, true), findIndex(nums, target, false)];
}

function findIndex(nums, target, findFirst) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            index = mid;
            if (findFirst) {
                end = mid - 1; // keep searching left
            } else {
                start = mid + 1; // keep searching right
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return index;
}
```

---

### ✅ **Q100 — Count of an Element in a Sorted Array**

**🧠 Problem:**
Given a sorted array and a target, find **how many times the target appears**.

---

### 🔍 Algorithm (Step-by-step):

1. Use the **same logic** as Q99 to find:

   * `firstIndex` of the target
   * `lastIndex` of the target
2. If either index is `-1`, the target doesn't exist.
3. Else, return `(lastIndex - firstIndex + 1)`

---

### ✅ Code:

```javascript
function countOccurrences(nums, target) {
    const first = findIndex(nums, target, true);
    if (first === -1) return 0; // not found

    const last = findIndex(nums, target, false);
    return last - first + 1;
}

function findIndex(nums, target, findFirst) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            index = mid;
            if (findFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return index;
}
```

---

