// first function : Fibonacci Sequence
// Implement a recursive function to generate the nth Fibonacci number.
// The Fibonacci sequence starts with 0 and 1,
// and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

function Fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }
}
console.log(Fibonacci(4));

// second function : Palindrome Checker
// Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards),
//  ignoring spaces, punctuation, and capitalization.

function Palindrome_Checker(string) {
  let str = string
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    .toLowerCase();
  let i = 0;
  let j = str.length - 1;
  if (i == j || j == i - 1) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return Palindrome_Checker(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}
console.log(Palindrome_Checker("elle"));

// Third function :Power Function
// Write a recursive function to calculate the result of raising a number to a given power.
function Power(number, n) {
  if (n == 1) {
    return number;
  } else {
    return number * Power(number, n - 1);
  }
}
console.log(Power(5, 2));
