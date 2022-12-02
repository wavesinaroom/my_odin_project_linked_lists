class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.previous = undefined;
  }
}

let firstNode = new Node(2);
firstNode.next = new Node(5);

console.log(firstNode.next.value);

