a = [1,7,3,4,7,19,6,1,0,13,9,3,7];
b = [];
c = [];
// try with sorting
for(i = 0;i <= a.length;i++){
  let pass = 0;
  a.forEach((vi,ii,ai)=>{
    if(vi > a[ii+1]){
    a[ii] = a[ii+1];
    a[ii+1] = vi
    pass++;
  }
  })
  if(pass === 0){
    // sort completed
    console.log("sort completed");
    break;
  }
}
console.log(a);
a.forEach((v,i,a)=>{
 
  let count = 0;
  
  a.forEach((vb,ib,ab)=>{
    
    if(vb === v){
      count++;
    }
  });
  if(count < 2){
    //b.splice(i,1);
     b.push(v);
  }
  
})
console.log("Second non duplicate number is :");
console.log(b[1]);
