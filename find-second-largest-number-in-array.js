let arr = ["3","3","2","-11",-11,-15,15,15];

let secondLargestNumber = (arr) => {
  // arr of strings
  if(arr.length > 1){
    let largest = Number.NEGATIVE_INFINITY ;
    let secondhights = Number.NEGATIVE_INFINITY ;
      arr.forEach((v,i,a)=>{
        // process
        
        
        if( parseFloat(v) > largest){
          secondhights = largest;
          largest = v;
        }
        else if(parseFloat(v) < largest && parseFloat(v) > secondhights){
          secondhights = v;
        }
        
      })  
  
  if(secondhights > Number.NEGATIVE_INFINITY){
    return secondhights;
  }
  else{
    return -1;
  }
  }
  
  return -1;
}

console.log(secondLargestNumber(arr));
