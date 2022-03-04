arr = [1,2,5,4,65465,.5,-6,3131,.1,.5]

function bubblesort(a){
  
  
  let swapped = 0;
  a.forEach((vi,ai,ari)=>{
    
    if(vi > a[ai + 1])
    {
      a[ai] = a[ai + 1];
      a[ai + 1] = vi;
      swapped++;
    }
  })
  if(swapped != 0){
    
    
     bubblesort(a);
  }
  
  return a;
  
}


console.log(bubblesort(arr));
