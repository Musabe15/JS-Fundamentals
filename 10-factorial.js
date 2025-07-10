function factorial (n) {
  if (isNaN(n)) {
    return 1;
  } 
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const input = process.argv[2];
const num = parseInt(input);
const result = factorial(num);
console.log(result);