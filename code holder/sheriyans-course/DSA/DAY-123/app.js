let prompt = require('prompt-sync')()

class Node {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

class Tree {
    buildTree() {
        let data = prompt("Enter a value")
        if (data == -1) return null

        let root = new Node(data)
        console.log("enter left data of" + data)
        root.left = this.buildTree()

        console.log("Enter right data of " + data)
        root.right = this.buildTree();

        return root
    }
}

function preorder(root) {
    if (root == null) return;
    process.stdout.write(root.val + " ")
    preorder(root.left)
    preorder(root.right)
}

let t = new Tree();
let root = t.buildTree();
console.log("Preorder Traversal:");
preorder(root);