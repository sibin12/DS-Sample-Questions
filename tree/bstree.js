class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BSTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    addNode(data) {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertnode(this.root, newNode)  
        }
    }
    insertnode(root, newNode) {
        if (newNode.data <root.data) {
            if (root.left === null) {
                root.left = newNode    
            } else {
                this.insertnode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertnode(root.right, newNode)
            }
        }
    }
  search(data) {
    return this.searchNode(this.root, data);
  }
  // helper function to recursively search for a node in the tree
  searchNode(node, data) {
    if (node === null) {
      return false
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return true;
    } 
  }
  preOrder(root){
    if(root){
        console.log(root.data)
        this.preOrder(root.left)
         this.preOrder(root.right)   }
  }
  inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }
  }
  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data);
    }
  }

  levelOrder(){
    let Queue =[]
    Queue.push(this.root)
    while(Queue.length){
        let curr=Queue.shift()
        console.log(curr.data)
        if(curr.left){
           Queue.push(curr.left)
        }
        if(curr.right){
            Queue.push(curr.right)
        }
    }
  }

  min(root){
    if(!root.left){
        return root.data
    }else{
        return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
        return root.data
    }else{
        return this.max(root.right) 
    }
  }
  delete(data){
    this.root=this.deleteNode(this.root,data)

  }
  deleteNode(root,data){
    if(root === null){
        return root
    }
    if(data<root.data){
        root.left = this.deleteNode(root.left,data)
    }else if(data > root.data){
        root.right = this.deleteNode(root.right,data)
    }else{              //used for data==root
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.data = this.min(root.right)
        root.right = this.deleteNode(root.right,root.data)
    }
    return root

  }
}
let tree = new BSTree()
console.log('tree is empty', tree.isEmpty());
tree.addNode(4)
tree.addNode(2)
tree.addNode(3)
tree.addNode(7)
tree.addNode(5)
tree.addNode(6)

console.log('tree is empty', tree.isEmpty());
console.log(tree.searchNode(4));
console.log(tree.search(31));
tree.levelOrder(tree.root)
// console.log('ijdfhhudsv');
console.log('minimum value  '+tree.min(tree.root));
console.log('maximum value  '+tree.max(tree.root));
tree.levelOrder()
console.log('after deletion');
tree.delete(2)
tree.levelOrder()