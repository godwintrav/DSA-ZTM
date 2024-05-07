class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index == 0) {
      return this.prepend(value);
    }

    const newNode = {
      value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    newNode.next = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let iterator = 0;
    if (index < 0) {
      return this.head;
    }
    let currentNode = this.head;
    while (iterator !== index) {
      currentNode = currentNode.next;
      iterator++;
    }

    return currentNode;
  }

  remove(index) {
    //check params
    if (index >= this.length || index < 0) {
      return;
    }
    const leader = this.traverseToIndex(index - 1);

    follower.prev = leader;
    const nodeToBeRemoved = leader.next;
    const follower = nodeToBeRemoved.next;
    follower.prev = leader;
    leader.next = follower;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(25);
myLinkedList.append(16);
myLinkedList.prepend(50);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 100);
myLinkedList.insert(0, 1);
myLinkedList.insert(8, 1000);
console.log(myLinkedList.printList());
myLinkedList.remove(6);
console.log(myLinkedList.printList());
myLinkedList.remove(7);
console.log(myLinkedList.printList());
