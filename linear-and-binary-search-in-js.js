let array = [1,2,3,457,4568,459,436345634,4356,67,78,7];
// linear Search Time complexity Best O(n), Worst O(n)
function linearSort(arr, itemtofind){
  for(let i = 0; i < arr.length; i++){
    if(itemtofind == arr[i]){
      return i;
    }
  }
}

console.log("found at", linearSort(array, 67))


// binarySearch Time complexity Best O(1), Worst O(logn)
function binarySearch(arr, itemtofind){
  if(arr.length != 0){
    let midpoint = Math.floor( arr.length / 2 );
    if(itemtofind == arr[midpoint])
    {
      return midpoint;
    }
    else{
      return (itemtofind < arr[midpoint])?binarySearch(halfArray(arr, "left"), itemtofind):binarySearch(halfArray(arr, "right"), itemtofind)
    }
  }
  else{
    // item not found
    return -1;
  }
}
function halfArray(arr, direction){
  let outputarray = [];
  let midpoint = Math.floor( arr.length / 2 );
  if(direction == 'left'){
    for(let i = 0; i< midpoint; i++){
      outputarray.push(arr[i]);
    }
  }
  else{
    for(let i = midpoint + 1; i< arr.length; i++){
      outputarray.push(arr[i]);
    }
  }
  return outputarray;
}
array.sort((a, b) => a - b);
console.log(binarySearch(array, 67))
