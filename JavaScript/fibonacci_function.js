// Fibonacci number in JavaScript using function

const fibo = function(num) {
  if(num < 2) { return num;}
  return fibo(num - 1) + fibo(num - 2);
}

let input_num = parseInt(prompt());

console.log(fibo(input_num));
