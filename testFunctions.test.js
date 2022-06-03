
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


