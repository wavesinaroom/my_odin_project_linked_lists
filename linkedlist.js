function createNode(value){
  return{
    value: value,
    next: null,
    previous: null,
  }
}

function List(value){
  return{
    head: createNode(value),
    addNode: function(value){
      this.head.next = createNode(value);
    }
  }
}

let list = new List(30);
console.log(list.head);
list.addNode(40);
console.log(list.head.next);
