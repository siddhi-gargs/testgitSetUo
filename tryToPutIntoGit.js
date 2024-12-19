const arr2 = [25, 56, 23, 10, 15, 18, 34];
const num = 45;
const [...combine] = [...arr1, num, ...arr2];
console.log("combine", combine);

const string = [[45, 56, 34], [45, 20, 45]];



const arr1 = [12, 20, 34, 63, 45, 90, 56, 35];
const comparator = function (pivot) {
  return function(a, b) {
    return a > pivot && b > pivot ? b - a : a - b;
  }
}

const pattern = arr1.sort(comparator(45));

