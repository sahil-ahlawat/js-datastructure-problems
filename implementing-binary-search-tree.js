class node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(value){
    let newnode = new node(value);
    if(this.root === null){
      this.root = newnode;
    }
    else{
      this.insertNode(this.root, newnode)
    }
  }
  insertNode(currentNode, newNode){
    if(currentNode.data > newNode.data){
      if(currentNode.left === null){
        currentNode.left = newNode;
      }
      else{
        this.insertNode(currentNode.left, newNode)
      }
    }
    else{
      if(currentNode.right === null){
        currentNode.right = newNode;
      }
      else{
        this.insertNode(currentNode.right, newNode);
      }
    }
  }
}
let bst = new binarySearchTree();
bst.insert(45);
bst.insert(50);
bst.insert(4);
bst.insert(5);
bst.insert(455);
bst.insert(51);
console.log(bst)
