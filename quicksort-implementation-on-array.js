ar = [1,1,2,1,1];


function quicksort(a){
        let pivpointer = Math.floor(a.length /2);
        let piv = a[pivpointer];
        let leftarr = [];
        let rightarr = [];
        if(a.length <= 1)
        {
          
          return a;
        }
        
          a.forEach((v,i,ar)=>{
        if(i === pivpointer){
          // what is this error
        }
        else{
            if(v < piv){
           
            leftarr.push(v);
          }
          else{
            rightarr.push(v);
            
            
          }
        }
          
          
        })
  let leftsorted = quicksort(leftarr);
  let rightsprted = quicksort(rightarr);
  return leftsorted.concat(piv,rightsprted)
}
console.log(quicksort(ar));
