function createNode(value){
  return{
    value: value,
    next: null,
    previous: null,
  }
}

function List(value){

   function findLastNode(node,value){
    if(node.next===null){
      console.log('next is null');
      node.next = createNode(value); 
      return; 
    }
    findLastNode(node.next,value);
  }
  return{
    head: createNode(value),
    appendNode: function(value){
      findLastNode(this.head,value);
    }
  }
}

let list = new List(30);
console.log(list.head);
list.appendNode(59);
console.log(list.head.next);
list.appendNode(93546);
console.log(list.head.next.next);
