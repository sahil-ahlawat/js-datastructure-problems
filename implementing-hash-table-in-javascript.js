class HashTable{
  constructor(){
    this.table = new Array(2);
    this.divider = Math.round(Math.random()*100);
  }
  setItem = (key,value) => {
    let hash = this.strigtoint(key);
    if(this.table[hash]){
      this.table[hash].push([key,value]);
    }
    else{
        this.table[hash] = [[key,value]];
    }
    
  }
  getItem = (key) =>{
    let hash = this.strigtoint(key);
    if(!this.table[hash]){
      return null;
    }
    return this.table[hash].find((v,i,a)=>{if(v[0] === key){return v;}})[1];
  }
  strigtoint(string){
    let hash = 13;
    for(let i =0; i<string.length;i++){
      hash = hash*string.charCodeAt(i)/this.divider;
    }
    hash = Math.round(hash);
    // console.log(hash)
    return hash;
  }
}

let firsthashtable = new HashTable();
firsthashtable.setItem("Sahil","Ahlawat");
firsthashtable.setItem("Aadil","aAhlawat");
console.log(firsthashtable.getItem("Aadil"))
