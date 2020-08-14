/*
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

// Your code here.
const arrayToList = function(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    let tempList = list;
    list = {
      value: arr[i],
      rest: tempList
    };
  }
  return list;
}

const listToArray = list => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

const prepend = (val, list) => {
  let newList = {
    value: val,
    rest: list
  };
  return newList;
}

const nth = (list, n) => { // get the value at index n
  if (n < 0) {
    return undefined;
  }

  for (let node = list; node; node = node.rest) {
    if (n === 0) {
      return node.value;
    }
    n--;
  }

}

const nthRecursive = (list, n) => {
  // console.log('  Curr: ' + list.value);
  // console.log('  n: ' + n);
  // console.log('  Rest: ');
  // console.log(list.rest);
  if (n === 0) {
    return list.value;
  } else if (list.rest === null || n < 0) {
    return undefined;
  } else {
    return nthRecursive(list.rest, (n - 1));
  }

}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 4));
// → undefined

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 4));
// → undefined
