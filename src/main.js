const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
};

const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};

const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj2, obj3));

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      // Проверка на одинаковое количество свойств
      return false;
    }
    for (let propName in obj1) {
      if (!obj2.hasOwnProperty(propName)) {
        // Есть ли свойства в обоих объектах
        return false;
      }
      if (obj1[propName].valueOf() !== obj2[propName].valueOf()) {
        // Одинаковы ли значения свойст
        if (!deepEqual(obj1[propName], obj2[propName])) {
          // проверка объекта в объекте
          return false;
        }
      }
    }
  }
  return true;
}
