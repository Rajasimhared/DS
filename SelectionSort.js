function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[max] > arr[j]) {
        max = j;
      }
    }
    if (max !== i) {
      let temp = arr[i];
      arr[i] = arr[max];
      arr[max] = temp;
    }
  }
  console.log(arr);
}

SelectionSort([9, 6, 3, 5, 8, 15]);
