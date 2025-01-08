export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail ? (this.tail.nextNode = newNode) : (this.head = newNode);
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== this.tail) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = null;
      this.tail = currentNode;
    }

    this.size--;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    let string = '';

    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (string += null);
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let currentNode = this.head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }

      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;

      if (!newNode.nextNode) {
        this.tail = newNode;
      }
    }

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let currentNode = this.head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }

      if (!currentNode.nextNode) {
        this.tail = null;
      }

      currentNode.nextNode = currentNode.nextNode.nextNode;
    }

    this.size--;
  }
}
