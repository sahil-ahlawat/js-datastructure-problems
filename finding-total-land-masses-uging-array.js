
// 0 is water and 1s are land masses
// this code find total number of land masses
let arr = [[1,0,1],[1,1,1],[0,0,1]];

console.table(arr);


let land = 0;
for(let i =0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    let currentelelement = arr[i][j];
    if(currentelelement === 0){
      continue;
    }
    let top = 0;
    if(i > 0){
      top = arr[i-1][j];
    }
    
    let left = 0;
    if(j > 0){
    left = arr[i][j-1];
    }
    let bottom =0;
    let bi = 0;
    if(j < j.length-1){
       right = arr[i][j+1];
    }
    
    let right = 0;
    if(i < i.length-1){
   
    // dont run on last column
    bottom = arr[i+1][j];
      bi = i+1+" ok "+j;
      // dont run on last row
    }
    
    
    if(currentelelement === 1 && i === 0 && j === 0){ // to see if its first element
      land++;
      console.log("incrementing land "+ land + " at ij"+i+""+j);
    }
    else if(currentelelement === 1 && top === 0 && left === 0 && bottom === 0 && right === 0){
      // do nothing
      land++
      console.log("incrementing land "+ land + " at i,j"+i+","+j+" top, bottom, left, right, bi"+top+""+bottom+""+left+""+right+" "+bi+" currentelelement "+currentelelement);
    }
    
   // i,j are coordinates
   // find adjecent coordinates
   // check if top if one,
   // check if left is one
    
  }
}
console.log("total land masses are "+ land);
