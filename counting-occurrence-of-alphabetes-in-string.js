let str = "laskudhgalhgasjdhglsjhgjdfh";
let strarr = str.split('');
let uniqarr = [];
strarr.forEach((v,i,a)=>{
  // console.log(v);
  if(uniqarr[v]){
    uniqarr[v] =  uniqarr[v] + 1;
  }
  else{
    uniqarr[v] = 1;
  }
})
console.table(uniqarr);
