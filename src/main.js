function polidrom(string) {
  string = string.split('').reverse().join('');
  return string;
}

const word = 'house';
console.log(polidrom(word));

function polidromCheck(string1, string2) {
  string1 = polidrom(string1);
  return ((string1 === string2) ? true : false);
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
  arr[i] = 100 * Math.random() + 1;
  arr[i] = Math.round(arr[i]);
}

console.log(arr);

function toZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 == 0)
      arr[i] =
        (arr[i] % 100 == 0 ? arr[i] / 100 : arr[i] / 10) +
        'zero' +
        (arr[i] / 100 == 1 ? 'zero' : '');
  }
  return arr;
}

console.log(toZero(arr));
