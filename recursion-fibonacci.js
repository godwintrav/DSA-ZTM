let counter = 1;
let values = [0, 1];
function fibonacciRecursive(n) {
  if (n == 0) {
    return 0;
  }

  if (n == 2 || n == 1) {
    return 1;
  }

  if (counter == n) {
    return values[n];
  }

  values.push(values[counter] + values[counter - 1]);
  counter++;

  return fibonacciRecursive(n);
}

console.log(fibonacciRecursive(43));

// function fibonacciRecursive(n) { O(2^n)
//     if (n < 2){
//       return n;
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
//   }

function fibonnaciIterative(n) {
  let values = [0, 1];
  for (let i = 1; i <= n; i++) {
    values.push(values[i] + values[i - 1]);
  }

  console.log(values[n]);
}

fibonnaciIterative(5);
