let str = "awa1221awa";
console.log();
function isPalindrome(str){
  let strlen = str.length;
  let middle = Math.floor(strlen/2);
  for(let i = 0; i <= middle; i++){
    if(str[i] !== str[strlen - i - 1]){
      //console.log(str[i] +" not equal to "+str[strlen - i - 1])
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str));
