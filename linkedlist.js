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

  function containsValue(node, value){
    if(node.next === null && node.value !==value){
      return false;
    }

    if(node.value !== value){
      containsValue(node.next,value);
    }else if(node.value === value){
      return true;
    }
  }

  function valuePosition(node, value, count){
    if(node.next === null && node.value !== value){
      console.log('Not in the list');
      return 0;
    }

    if(node.value !== value){
      console.log('Not yet');
      return valuePosition(node.next,value, count+1);
    }else if(node.value === value){
      console.log('Found!');
      return position;
    }
  }

  function printNodeValue(node){

    if(node.next === null){
      return `(${node.value})`;
    }

    return `(${node.value})->` + printNodeValue(node.next);
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
      secondLast.next = null;
    },
    contains: function(value){
      containsValue(this.root, value);
    },
    find: function(value){
      valuePosition(this.root, value, 0);
    },
    ToString: function(){
      printNodeValue(this.root);
    }
  };
}

const list = List(89);
list.appendNode(98);
list.appendNode(9835);
list.appendNode(8245);
list.prependNode(9834);
list.prependNode(2345);

  function printNodeValue(node){

    if(node.next === null){
      return `(${node.value})`;
    }

    return `(${node.value})->` + printNodeValue(node.next);
  }
const string = printNodeValue(list.root);
console.log(string);
