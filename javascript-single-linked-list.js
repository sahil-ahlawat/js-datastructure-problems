class linkedlist {
  constructor(head = null){
    this.head = head;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let lastnode = this.head;
    while(lastnode.next){
      lastnode = lastnode.next;
    }
    return lastnode;
  }
  clear(){
    this.head = null;
  }
  size(){
    let count = 0;
    node = this.head;
    while(node){
      count++
      node = node.next
    }
    return count;
  }
}

class node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
one = new node("one value");
two = new node("two value");
three = new node("three value");

one.next = two;
two.next = three;
three.next = null;

list = new linkedlist(one);
console.log(list.getFirst().value)
console.log(list.getLast().value)
console.log(list.size())
list.clear()
console.log(list.size())
