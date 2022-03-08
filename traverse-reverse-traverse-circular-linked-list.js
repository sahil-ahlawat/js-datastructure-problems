class node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class circularList{
  constructor(){
    this.root = null;
  }
  insert(value){
    let newnode = new node(value);
    if(this.root === null){
      // newnode.left = newnode;
      // newnode.right = newnode;
      this.root = newnode;
    }
    else if(this.root.right === null){
      // second element
      newnode.left = this.root;
      newnode.right = this.root;
      this.root.right = newnode;
      this.root.left = newnode;
    }
    else{
      // insert in the insert
      newnode.left = this.root.left;
      newnode.right = this.root;
      this.root.left.right = newnode;
      this.root.left = newnode;
    }
    
  }
  traverse(){
    let currentnode = this.root;
    do{
      console.log(currentnode.data);
      currentnode = currentnode.right;
    }
    while(currentnode !== this.root)
  }
  reversetraverse(){
    let currentnode = this.root;
    do{
      console.log(currentnode.data);
      currentnode = currentnode.left;
    }
    while(currentnode !== this.root)
  }
  largestsumofleastnumbers(){
    
  }
}
// let bst = new binarySearchTree();
// bst.insert(45);
// bst.insert(50);
// bst.insert(4);
// bst.insert(5);
// bst.insert(455);
// bst.insert(51);
let listt = new circularList();
//console.log(listt);
listt.insert(10);
listt.insert(20);
listt.insert(30);
listt.insert(40);
listt.insert(0);
listt.insert(140);
listt.insert(-40);
listt.insert(60);
console.log("Traversing Right :");
listt.traverse();
console.log("Reverse Traverse :");
listt.reversetraverse();
//console.log(listt);
