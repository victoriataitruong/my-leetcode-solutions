// Array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// ArrayList
class ArrayList {
    constructor() {
        this.array = [];
    }

    append(value) {
        this.array.push(value);
    }

    remove(value) {
        const index = this.array.indexOf(value);
        if (index !== -1) {
            this.array.splice(index, 1);
        } else {
            console.log(`${value} not found in the list.`);
        }
    }

    get(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        } else {
            console.log("Index out of range.");
            return null;
        }
    }

    size() {
        return this.array.length;
    }

    toString() {
        return this.array.toString();
    }
}

// Example usage:
let arraylist = new ArrayList();
arraylist.append(10);
arraylist.append(20);
arraylist.append(30);
console.log(arraylist.toString());
console.log(arraylist.get(1));
arraylist.remove(20);
console.log(arraylist.toString());
console.log(arraylist.size());

// AVL Tree
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    insert(root, key) {
        if (!root) return new Node(key);

        if (key < root.key) {
            root.left = this.insert(root.left, key);
        } else {
            root.right = this.insert(root.right, key);
        }

        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        const balance = this.getBalance(root);

        if (balance > 1 && key < root.left.key) return this.rightRotate(root);
        if (balance < -1 && key > root.right.key) return this.leftRotate(root);
        if (balance > 1 && key > root.left.key) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
        if (balance < -1 && key < root.right.key) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root;
    }

    leftRotate(z) {
        let y = z.right;
        let T2 = y.left;

        y.left = z;
        z.right = T2;

        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;
    }

    rightRotate(z) {
        let y = z.left;
        let T3 = y.right;

        y.right = z;
        z.left = T3;

        z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
        y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

        return y;
    }

    getHeight(root) {
        return root ? root.height : 0;
    }

    getBalance(root) {
        return root ? this.getHeight(root.left) - this.getHeight(root.right) : 0;
    }

    preOrder(root) {
        if (!root) return;
        console.log(root.key);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}

// Example usage:
let tree = new AVLTree();
let root = null;

let keys = [10, 20, 30, 40, 50, 25];
for (let key of keys) {
    root = tree.insert(root, key);
}

console.log("Preorder traversal of the AVL tree:");
tree.preOrder(root);

// Binary Search Tree
class BSTNode {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.value = key;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        if (this.root === null) {
            this.root = new BSTNode(key);
        } else {
            this._insert(this.root, key);
        }
    }

    _insert(node, key) {
        if (key < node.value) {
            if (node.left === null) {
                node.left = new BSTNode(key);
            } else {
                this._insert(node.left, key);
            }
        } else if (key > node.value) {
            if (node.right === null) {
                node.right = new BSTNode(key);
            } else {
                this._insert(node.right, key);
            }
        }
    }

    search(key) {
        return this._search(this.root, key);
    }

    _search(node, key) {
        if (node === null || node.value === key) {
            return node;
        }
        if (key < node.value) {
            return this._search(node.left, key);
        }
        return this._search(node.right, key);
    }

    inorder() {
        return this._inorder(this.root);
    }

    _inorder(node) {
        let res = [];
        if (node) {
            res = res.concat(this._inorder(node.left));
            res.push(node.value);
            res = res.concat(this._inorder(node.right));
        }
        return res;
    }

    delete(key) {
        this.root = this._delete(this.root, key);
    }

    _delete(node, key) {
        if (node === null) return node;

        if (key < node.value) {
            node.left = this._delete(node.left, key);
        } else if (key > node.value) {
            node.right = this._delete(node.right, key);
        } else {
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            node.value = this._minValueNode(node.right).value;
            node.right = this._delete(node.right, node.value);
        }

        return node;
    }

    _minValueNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
}

// Example usage:
let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Inorder traversal:", bst.inorder());  // Output: [20, 30, 40, 50, 60, 70, 80]

let result = bst.search(40);
console.log("Search for 40:", result ? "Found" : "Not found");

bst.delete(20);
console.log("Inorder traversal after deleting 20:", bst.inorder());

// Graph
class Graph {
    constructor() {
        this.graph = {};
    }

    addNode(node) {
        if (!this.graph[node]) {
            this.graph[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (!this.graph[node1]) this.addNode(node1);
        if (!this.graph[node2]) this.addNode(node2);
        this.graph[node1].push(node2);
        this.graph[node2].push(node1); // Undirected graph
    }

    printGraph() {
        for (let node in this.graph) {
            console.log(`${node}: ${this.graph[node]}`);
        }
    }
}

// Example Usage
let g = new Graph();
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);
g.printGraph();

// HashTable
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = Array(size).fill(null);
    }

    _hash(key) {
        return key.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
    }

    insert(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        const existingIndex = this.table[index].findIndex(([k]) => k === key);
        if (existingIndex !== -1) {
            this.table[index][existingIndex] = [key, value];
        } else {
            this.table[index].push([key, value]);
        }
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const item = bucket.find(([k]) => k === key);
            return item ? item[1] : undefined;
        }
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const itemIndex = bucket.findIndex(([k]) => k === key);
            if (itemIndex !== -1) {
                bucket.splice(itemIndex, 1);
            }
        }
    }

    display() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Index ${index}: ${JSON.stringify(bucket)}`);
            }
        });
    }
}

// Example usage
let ht = new HashTable();
ht.insert("name", "Alice");
ht.insert("age", 30);
ht.insert("city", "New York");

console.log(ht.get("name"));  // Output: Alice
console.log(ht.get("age"));   // Output: 30
console.log(ht.get("city"));  // Output: New York

ht.remove("age");
console.log(ht.get("age"));   // Output:
