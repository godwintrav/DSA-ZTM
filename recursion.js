let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return "done!";
  }

  counter++;
  return inception();
}

//console.log(inception());

let value = 1;
//O(n)
function findFactorialRecursive(number) {
  if (number == 1) {
    return value;
  }
  value = value * number;
  return findFactorialRecursive(number - 1);
}

// function findFactorialRecursive(number) {
//     if(number === 2) {
//       return 2;
//     }
//     return number * findFactorialRecursive(number - 1)
//   }

console.log(findFactorialRecursive(2));

//O(n)
function findFactorialFor(number) {
  let value = 1;
  for (let i = 2; i <= number; i++) {
    value = value * i;
  }
  console.log(value);
}

findFactorialFor(2);
