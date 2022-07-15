const changecolor = () => {
  let i = 0;
  return function (event) {
    event.target.style.color = colors[i];
    if (i > colors.length - 2) return (i = 0);
    return i++;
  };
};

function sum(a) {
  let sum = a;
  function add(b) {
    sum += b;
    return sum;
  }
  add.toString = () => {
    return sum;
  };
  return add;
}

console.log(sum(5)(2));
//====================================
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const changecolor1 = changecolor();
const changecolor2 = changecolor();
const changecolor3 = changecolor();
const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
// p1.addEventListener('click', changecolor1);
// p2.addEventListener('click', changecolor2);
// p3.addEventListener('click', changecolor3);

module.exports = { sum, changecolor };
