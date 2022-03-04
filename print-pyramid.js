let count = 15;
    //   *
    // ***
    // ***** 
function printpyramid(count){
 
  let string = "";
  for (let i = 1; i <= count; i++) {
    let onecount = 0;
    for (let j = 1; j <= count; j++) {
      let middle = Math.floor(count / 2) +1;
      
    if(j < middle + i && j > middle -i ){
      string += "*";
    }
    else{
      string += "1";
      onecount++;
    }
      
    
      
    }
    if(!onecount){
      break;
    }
    string += "\n";
  }
console.log(string);
}

printpyramid(count);
