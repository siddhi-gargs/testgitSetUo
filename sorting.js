const numbers = [12, 45, 37, 78, 34, 67, 34];
const sorted = numbers.sort(function(a, b) {
  console.log(`a ${a} , b ${b}`);
  if (a === b) return 0;
  return a > b ? -1 : 1;
})

console.log("sorted", sorted);

const strings = ["siddhi", "abhinav", "sakib", "rohini", "shyam", "bhanu"];
const arrangeAlphabetic = strings.sort(function(a, b) {
  console.log(`a ${a} b ${b}`);
  if (a.length === b.length) return 0;
  return a.length > b.length ? 1 : -1;
});
console.log("arrangeAlphabetic", arrangeAlphabetic);



const arraysOfArrays = [[13, 4, 56, 10, 24, -24], [45, 34, 23, 10, 67, 64]];

const arrangeAscending = function (array) {
  const [...store] = [...array];
  return store.sort((a, b) => {if (a === b) return 0;
    return a > b ? 1 : -1;
  });
}

const sortedArray = arraysOfArrays.map(arrangeAscending); 
console.log("sortedArray", sortedArray);
