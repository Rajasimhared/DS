class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  let node = new Node(data);
  node.next = this.head;
  this.head = node;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function (data) {
  let node = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = node;
  return this.head;
};

LinkedList.prototype.insertAtPosition = function (data, index) {
  let node = new Node(data);
  if (!this.head) {
    this.head = node;
    return;
  }
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }
  let current = this.head;
  let counter = 0;
  while (counter !== index) {
    current = current.next;
    counter++;
  }
  node.next = current.next;
  current.next = node;
  return this.head;
};

LinkedList.prototype.printList = function () {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.deleteLastNode = function () {
  let previous = this.head;
  let tail = this.head.next;
  while (tail.next) {
    previous = tail;
    tail = tail.next;
  }
  previous.next = null;
  return this.head;
};

const list = new LinkedList();
list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtEnd(50);
list.insertAtPosition(30, 1);
list.deleteFirstNode();
list.deleteLastNode();
list.printList();
