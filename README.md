# Lyra Innovation Solution

By Álvaro Iglesias Jusmet

## Problem Statement

Given a string of digits and an integer `n`, the task is to check whether it is possible to insert `+` or `-` signs before each digit in the sequence such that, after performing all the operations, the final result is equal to `n`.


## Solution Overview

This project could have been easier if the amount of inputs would be smaller, but for using large numbers, the big challenge is to efficiently manage memory.
Instead of exploring all possible combinations(which would be \(2^n\) for \(n\) digits, normal computers have not got enough memory), it builds up all possible sums iteratively:

1. **Initialization**:
   - Start with the first digit and consider its two possible contributions: `+digit` and `-digit`.

2. **Iterative Propagation**:
   - For each subsequent digit, calculate all possible new sums by adding and subtracting the digit from all previously computed sums.

3. **Offset Technique**:
   - Since sums can be negative, an **OFFSET** is used to shift all sums to positive indices in the `possibleSums` array.

4. **Final Check**:
   - After processing all digits, the algorithm checks whether the target result exists in the set of possible sums.

---

## Project Structure

| File              | Description                                                  |
|--------------------|--------------------------------------------------------------|
| `index.html`       | Contains the structure of the webpage and a button to run the program. (Recommended to open it with Open Live Server VS Code Extension) |
| `style.css`        | Styles for a clean and modern interface.                    |
| `functions.js`     | Core logic for solving the subset sum with signs problem.   |
| `script.js`        | Handles DOM manipulation and dynamic rendering of results.  |

---

## How It Works

When you click **"See solutions"**, the program:
1. Generates random test cases (`generateCases`).
2. Solves each case using `searchSequence`.
3. Displays results in a table with:
   - **Sequence**
   - **Target number**
   - ✅ if it’s possible, ❌ otherwise.

The results appear with a **smooth animation** from top to bottom.

---

## 🧑‍💻 Core Algorithm

```js
function searchSequence(numSequence, targetResult) {
    const maxAbsoluteSum = numSequence.reduce((acc, n) => acc + n, 0);
    const MAX_SUM = (2 * maxAbsoluteSum) + 1;
    const OFFSET = maxAbsoluteSum;

    let possibleSums = new Array(MAX_SUM).fill(false);
    possibleSums[OFFSET + numSequence[0]] = true;
    possibleSums[OFFSET - numSequence[0]] = true;

    for (let i = 1; i < numSequence.length; i++) {
        let nextPossibleSums = new Array(MAX_SUM).fill(false);
        for (let sum = 0; sum < MAX_SUM; sum++) {
            if (possibleSums[sum]) {
                nextPossibleSums[sum + numSequence[i]] = true;
                nextPossibleSums[sum - numSequence[i]] = true;
            }
        }
        possibleSums = nextPossibleSums;
    }

    return possibleSums[OFFSET + targetResult] === true;
}
