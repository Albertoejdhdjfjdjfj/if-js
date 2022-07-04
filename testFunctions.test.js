/**
 * @jest-environment jsdom
 */

 const{sum,changecolor}=require('./src/main')

 document.body.innerHTML = `  
 <p id="text1">Text 1</p>
 <p id="text2">Text 2</p>
 <p id="text3">Text 3</p>`;
 
 describe('Check function Sum', () => {
  test('Check with value 2&&-2', () => {
    expect(sum(2)(-2)).toBe(0);
  });
  test('Check with value 2 && 3', () => {
    expect(sum(2)(3)).toBe(5);
  });
  test('Check with value -2 && 100', () => {
    expect(sum(-2)(100)).toBe(98);
  });
});

describe("check out change text color", () => {
  const changecolor1 = changecolor();
  const changecolor2 = changecolor();
  const changecolor3 = changecolor();
  const p1 = document.getElementById('text1');
  const p2 = document.getElementById('text2');
  const p3 = document.getElementById('text3');
  p1.addEventListener('click', changecolor1);
  p2.addEventListener('click', changecolor2);
  p3.addEventListener('click', changecolor3);
  let pBlock = [p1, p2, p3];
  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  
  test("expect 1st click color is magenta", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("magenta");
    }
  });

  test("expect 2st click color is cyan", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("cyan");
    }
  });

  test("expect 3st click color is firebrick", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("firebrick");
    }
  });

  test("expect 4th click color is springgreen", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("springgreen");
    }
  });

  test("expect 5th click color is skyblue", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("skyblue");
    }
  });

  test("check cycle actions", async () => {
    for (let i = 0; i < pBlock.length; i++) {
      pBlock[i].click();
      changecolor(pBlock[i]);
      const color = pBlock[i].style.color;
      expect(color).toBe("magenta");
    }
  });
});
