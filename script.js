function deepCopy(obj, visited = new WeakMap()) {
  // Если obj является примитивом, просто возвращаем его
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  // Если obj уже был посещен, возвращаем его копию
  if (visited.has(obj)) {
      return visited.get(obj);
  }

  // Создаем новый объект или массив в зависимости от типа obj
  let copy = Array.isArray(obj) ? [] : {};

  // Запоминаем созданный копии объекта в WeakMap
  visited.set(obj, copy);

  // Рекурсивно копируем все свойства объекта
  for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = deepCopy(obj[key], visited);
      }
  }

  return copy;
}

let originalObject = {
a: 1,
b: {
    c: 2,
    d: [3, 4, 5]
},
e: function() {
    console.log("Hello, world!");
}
};

let copiedObject = deepCopy(originalObject);

console.log(copiedObject);
console.log(copiedObject.e());
