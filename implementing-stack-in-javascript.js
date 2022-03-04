class stack{
  constructor(){
    this.array = new Array();
  }
  push(value){
    this.array.push(value);
  }
  pop(){
    let lastpointer = this.array.length - 1;
    this.array.splice(lastpointer,1);
  }
  peek(){
    let lastpointer = this.array.length - 1;
    return this.array[lastpointer];
  }
}

newstack = new stack();
newstack.push("Sahil");
newstack.push("Ahlawat");
console.log(newstack.peek())
newstack.pop();
console.log(newstack.peek())
newstack.pop();
console.log(newstack.peek())
