function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

console.log('Start');
setTimeout(() => {
  console.log('Hola JavaScript!');
}, 5000);
console.log('After timeout');

function greeting({name, age}) {
  console.log(`Hola ${name}, your age is ${age}!`);
}

setTimeout(greeting, 2000, {age: 34, name: 'José'});