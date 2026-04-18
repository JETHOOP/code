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
obj.deleteAtFirst()
obj.printLL()
obj.deleteAtLast()
obj.printLL()