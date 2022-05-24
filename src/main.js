function polidrom(string) {
  string = string.split('');
  string.reverse();
  string = string.join('');
  return string;
}

const word = 'house';
console.log(polidrom(word));

function polidromCheck(string1, string2) {
  string1 = polidrom(string1);
  if (string1 === string2) return true;
  else return false;
}

console.log(polidromCheck(word, polidrom(word)));
//------------------------------------------
function min(a, b) {
  return a > b ? b : a;
}

console.log(min(4, 5));

function max(a, b) {
  return a < b ? b : a;
}

console.log(max(4, 5));

//----------------------------------------------

const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = 100 * Math.random();
  arr[i] = Math.round(arr[i]);
}

console.log(arr);

function toZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 == 0) arr[i] = arr[i] / 10 + 'zero';
  }
  return arr;
}

console.log(toZero(arr));
