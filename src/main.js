
const colorchange = () => {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    i + 1 == colors.lenght ? (i = 0) : i++;
  };
};

function sum(a) {
  let Sum = a;
  function f(b) {
    Sum += b;
    return Sum;
  }
  f.toString = function () {
    return Sum;
  };
  return f;
}
console.log(sum(5)(2));

//====================================
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const colorchange1 = colorchange();
const colorchange2 = colorchange();
const colorchange3 = colorchange();

const p1 = document.getElementById('text1');
p1.addEventListener('click', colorchange1);
const p2 = document.getElementById('text2');
p2.addEventListener('click', colorchange2);
const p3 = document.getElementById('text3');
p3.addEventListener('click', colorchange3);

