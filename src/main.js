function Polidrom(string) {
  string = string.split('');
  string.reverse();
  string = string.join('');
  return string;
}

const word = 'house';
console.log(Polidrom(word));

function Polidromcheck(string1, string2) {
  string1 = Polidrom(string1);
  if (string1 == string2) return true;
  else return false;
}

console.log(Polidromcheck('house', 'esuoh'));
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
  arr[i] = 10 * Math.random();
  arr[i] = Math.round(arr[i]);
}

console.log(arr);

function ToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) arr[i] = 'zero';
  }
  return arr;
}

console.log(ToZero(arr));
