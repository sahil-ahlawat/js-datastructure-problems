class linkedlist {
  constructor(head = null){
    this.head = head;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    return this.head.previous;
    let lastnode = this.head;
    while(lastnode.next){
      lastnode = lastnode.next;
    }
    return lastnode;
  }
  clear(){
    this.head = null;
  }
  printallvalues(){
    if(!this.head){
      return;
    }
    let firstnode = this.head;
    let node = this.head;
    do{
      console.log(node.value)
      node = node.next
    }while(node !== firstnode)
  }
  insertinstart(){
    
  }
  insertatend(){
    
  }
  size(){
    if(!this.head){
      return 0;
    }
    let count = 0;
    let firstnode = this.head;
    let node = this.head;
    do{
      count++
      node = node.next
    }while(node !== firstnode)
    return count;
  }
}

class node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
one = new node("one value");
two = new node("two value");
three = new node("three value");

one.next = two;
one.previous = three;
two.next = three;
two.previous = one;
three.next = one;
three.previous = two;

list = new linkedlist(one);
console.log(list.getFirst().value)
console.log(list.getLast().value)
console.log(list.size())
list.printallvalues()
list.clear()
console.log(list.size())
// console.log(list.getFirst().value)
// console.log(list.getLast().value)
