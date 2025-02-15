let array = [2,3,5,1,4,9,2,1,0,1,7,6,3];
let sortedArray = [];
// lets learn merge sort 
function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (array.length <= 1) {
    return array;
  }

  // Break the array into two parts
  let [part1, part2] = breakArray(array);

  // Recursively sort both parts
  part1 = mergeSort(part1);
  part2 = mergeSort(part2);

  // Merge the sorted parts
  return merge(part1, part2);
}
function merge(part1, part2) {
  // merging 
 
  let merged = [];
  let i = 0, j = 0;

  while (i < part1.length && j < part2.length) {
    if (part1[i] < part2[j]) {
      merged.push(part1[i]);
      i++;
    } else {
      merged.push(part2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < part1.length) {
    merged.push(part1[i]);
    i++;
  }

  while (j < part2.length) {
    merged.push(part2[j]);
    j++;
  }

  return merged;
}
function breakArray(array){
  let part1 = [];
  let part2 = [];
  if(array.length > 1){
  let middle = Math.floor(array.length / 2);
  for(let i = 0; i<middle;i++){
    part1.push(array[i]);
    part2.push(array[middle+i]);
  }
  if(middle != array.length/2){
    part2.push(array[array.length -1])
  }
  return [part1,part2];
}

}
mergeSort(array);
console.log("Sorted array : ",mergeSort(array))
