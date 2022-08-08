// const changecolor = () => {
//   let i = 0;
//   return function (event) {
//     event.target.style.color = colors[i];
//     if (i > colors.length - 2) return (i = 0);
//     return i++;
//   };
// };

const changecolor = () => (event) => {
  event.target.style.color = colors.next();
};

//====================================
const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  [Symbol.iterator]() {
    this.current = this.data;
    this.i = 0;
    return {
      next() {
        if (this.i > this.current.length - 2) {
          this.i = 0;
          return { done: false, value: this.current[this.i] };
        } else {
          return { done: false, value: this.current[this.i++] };
        }
      },
    };
  },
};
const changecolor1 = changecolor();
const changecolor2 = changecolor();
const changecolor3 = changecolor();
const p1 = document.getElementById("text1");
const p2 = document.getElementById("text2");
const p3 = document.getElementById("text3");
p1.addEventListener("click", changecolor1);
p2.addEventListener("click", changecolor2);
p3.addEventListener("click", changecolor3);
