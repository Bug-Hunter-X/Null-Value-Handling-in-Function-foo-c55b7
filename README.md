# Null Value Handling in Function foo

This repository demonstrates a common bug in JavaScript related to handling null values. The `foo` function is expected to perform some operation, but it behaves unexpectedly when null values are passed as arguments.

## Bug

The original `foo` function does not explicitly handle null values. This can lead to unexpected errors or incorrect results, depending on how the function is implemented. 

## Solution

The solution adds explicit null checks to handle cases where `a` or `b` is null. This ensures that the function behaves as expected, regardless of the input values.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred text editor.
3. Run `bug.js` and observe the unexpected behavior when nulls are passed.
4. Run `bugSolution.js` to observe the corrected behaviour.