class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;

  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)

    if(!this.root){
      this.root = newNode
      return this
    }
    
    let prev = this.root
    let current = this.root

    while(current){
      prev = current
      if (val < current.val ){
        current = current.left
        if(!current) prev.left = newNode
      }else{
        current = current.right
        if(!current) prev.right = newNode
      }
    }
    console.log(this.root)
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let current = this.root
    const newNode = new Node(val)
    if(!current){
      this.root = newNode
      return this
    }
    
    function insert(val){
      if(val > current.val){
        if(!current.right) {current.right = newNode}
        current = current.right
      } 
      if(val < current.val){
        if(!current.left) {current.left = newNode}
        current = current.left
      }
      if(current === newNode) return this
      

      insert(val)
    }

    insert(val)
    return this

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    
    while(current){

      if (val < current.val ){
        
        if(!current.left) {return}
        else{current = current.left}

      }else if (val > current.val ){
        if(!current.right) {return}
        else{current = current.right}
      
      }else{
        return current
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let resNode = undefined
    function traverse(root){
      if (!root) return
      if (root.val == val){
        resNode = root
      }
      if(root.val > val){
        traverse(root.left)
      }
      if (root.val < val){
        traverse(root.right)}
    }
    traverse(this.root)
    return resNode

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let resArr = []
    function traverse(root){
      if(!root) return
      resArr.push(root.val)
      
      traverse(root.left)
      traverse(root.right)
    }
    traverse(this.root)
    return resArr

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let resArr = []
    function traverse(root){
      if(!root) return
      
      traverse(root.left)
      resArr.push(root.val)
      traverse(root.right)
    }
    traverse(this.root)
    return resArr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let resArr = []
    function traverse(root){
      if(!root) return
      
      traverse(root.left)
      traverse(root.right)
      resArr.push(root.val)
    }
    traverse(this.root)
    return resArr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return
    let levelArr = [this.root]
    let resArr = [this.root.val]

    function traverse(level){
      let nextLevel = []
      console.log(level)
     level.forEach((node) =>{
        if(!node) return
        if (node.left){
          resArr.push(node.left.val)
          nextLevel.push(node.left)
        } 
        if(node.right){
          resArr.push(node.right.val)
          nextLevel.push(node.right)
        } 
      })
      if (nextLevel.length == 0) return
      traverse(nextLevel)
    }

    traverse(levelArr)
    return resArr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
