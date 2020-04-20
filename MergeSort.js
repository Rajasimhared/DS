function MergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  let arrayLength = arr.length;
  const middle = Math.floor(arrayLength / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(MergeSort(left), MergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(MergeSort([2, 5, 1, 3, 7, 4, 2, 3, 9, 8, 6, 3]));
