const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  [Symbol.iterator]() {
    let i = 0;
    const next = () => {
      if (i < this.data.length) {
        return { value: this.data[(i += 1)], done: false };
      }

      if (i === this.data.length) {
        i = 0;
        return { value: this.data[(i += 1)], done: false };
      }

      return i++;
    };

    return { next };
  },
};

const changecolor = (p, colors) => {
  const col = colors[Symbol.iterator]();
  p.onclick = () => {
    p.style.color = col.next().value;
  };
};

const p1 = document.getElementById("text1");
const p2 = document.getElementById("text2");
const p3 = document.getElementById("text3");
changecolor(p1, colors);
changecolor(p2, colors);
changecolor(p3, colors);
