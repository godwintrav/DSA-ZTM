function addTo80(n) {
  return n + 80;
}

function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

let fiboCalculator = 0;
function fibonacii(n) {
  fiboCalculator++;
  if (n < 2) {
    return n;
  }

  return fibonacii(n - 1) + fibonacii(n - 2);
}
let calculator = 0;
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculator++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[1 - 2] + answer[i - 1]);
  }

  return answer.pop();
}

const memoized = fibonacciMaster();

console.log("1", memoized(20));
console.log(calculator);
//console.log("2", memoized(100));
console.log(fibonacii(20));
console.log(fiboCalculator);
