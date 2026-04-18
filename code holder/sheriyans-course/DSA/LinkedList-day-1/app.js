class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertAtFirst(val) {
        this.size++
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    insertAtLast(val) {
        this.size++
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode
    }

    insertAtIndex(val, index) {
        if (index < 0 || index > this.size) {
            console.log("Not Possible");
            return
        }
        this.size++
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        newNode.next = temp.next
        temp.next = newNode
    }

    deleteAtIndex( index) {
        if (index < 0 || index > this.size) {
            console.log("Not Possible");
            return
        }
        this.size--
        if (this.head === null) {
            console.log("EMpty List")
            return
        }
        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        temp.next = temp.next.next
    }

    deleteAtFirst() {
        if (this.head === null) {
            console.log("EMpty List")
            return
        }
        this.size--
        this.head = this.head.next
    }

    deleteAtLast() {
        if (this.head === null) {
            console.log("EMpty List")
            return
        }
        this.size--
        let temp = this.head
        while (temp.next.next !== null) {
            temp = temp.next
        }
        temp.next = temp.next.next
    }

    printLL() {
        if (this.head === null) {
            console.log("Empty list")
            return
        }
        let temp = this.head
        while (temp != null) {
            process.stdout.write(temp.val + "->")
            temp = temp.next
        }
        console.log("null")
    }
}

let obj = new LinkedList()
obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtFirst(40)
obj.printLL()
obj.insertAtLast(100)
obj.printLL()

obj.insertAtIndex(1000, 2)
obj.printLL()

obj.deleteAtIndex(3)
obj.printLL()
