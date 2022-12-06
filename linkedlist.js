class Node{
  static count = 0;
  constructor(value){
    ++Node.count;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

function List(value) {
  function checkNextNode(node) {
    if (node.next !== null) {
      return checkNextNode(node.next);
    } else {
      return node;
    }
  }

  return {
    root: new Node(value),
    appendNode: function (value) {
      let head = checkNextNode(this.root);
      head.next = new Node(value);
      head.next.previous = head;
    },
    prependNode: function (value) {
      const temporal = this.root;
      this.root = new Node(value);
      this.root.next = temporal;
    },
    getHead: function () {
      return checkNextNode(this.root);
    },
    getTail: function () {
      return this.root;
    },
    size: function () {
      return Node.count;
    },
    pop: function() {
      let secondLast = checkNextNode(this.root).previous;
      delete secondLast.next;
      console.log(secondLast);
    }
  };
}

const list = List(89);
list.appendNode(98);
list.appendNode(9835);
list.appendNode(8245);
list.prependNode(9834);
list.prependNode(2345);
list.pop();
