const arr = [];

const sumFunction = (acc, curr) => acc + curr;

for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    arr.push(i);
  }
}
console.log(arr);
const sum = arr.reduce(sumFunction);
console.log(sum);
