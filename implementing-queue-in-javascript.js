class Queue{
  constructor(){
    this.array = new Array();
  }
  enqueue(value){
    this.array.push(value);
  }
  dequeue(){
    
    this.array.shift()
  }
  peek(){
    
    return this.array[0];
  }
}

newque = new Queue();
newque.enqueue("Sahil");
newque.enqueue("Ahlawat");
console.log(newque.peek())
newque.dequeue();
console.log(newque.peek())
newque.dequeue();
console.log(newque.peek())
