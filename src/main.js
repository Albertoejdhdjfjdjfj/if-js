let user = 'John Doe';
console.log(user);
const student = 'Albert Bairamukov';
console.log(student);
user += student; // происходит контентенация строк переменных
console.log(user);
let test = 1;
test++;
test += '1'; //происходит контетенация переменных как строки
console.log(test);
test--; // просто отнимется 1 как от числа
console.log(test);
test = true;
console.log(test);
let arr = [2, 3, 5, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
console.log(sum);
arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5 && arr[i] < 10) console.log(arr[i]);
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) console.log(arr[i]);
}
