class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
    console.log(this);
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
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
    newNode.next = leader.next;
    leader.next = newNode;
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
    const nodeToBeRemoved = leader.next;
    leader.next = nodeToBeRemoved.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    const tempData = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      tempData.push(currentNode);
      currentNode = currentNode.next;
    }

    for (let i = tempData.length - 1; i >= 0; i--) {
      if (i == tempData.length - 1) {
        this.head = tempData[i];
        this.head.next = tempData[i - 1];
      } else if (i == 0) {
        this.tail = tempData[i];
        this.tail.next = null;
      } else {
        tempData[i].next = tempData[i - 1];
      }
    }

    return this;
  }

  //tutorial solution
  //   reverse() {
  //     if (!this.head.next) {
  //       return this.head;
  //     }

  //     let first = this.head;
  //     this.tail = this.head;
  //     let second = first.next;
  //     while (second) {
  //       const temp = second.next;
  //       second.next = first;
  //       first = second;
  //       second = temp;
  //     }

  //     this.head.next = null;
  //     this.head = first;
  //     return this;
  //   }
}

const myLinkedList = new LinkedList(10);
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
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
