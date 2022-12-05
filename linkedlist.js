function createNode(value){
  return{
    value: value,
    next: null,
    previous: null,
  }
}

function List(value){

   function checkPreviousNode(node){
    if(node.previous!==null){
      return checkPreviousNode(node.previous);
    }else{
      return node;
    }
   }
   function CheckNextNode(node){
    if(node.next!==null){
      return CheckNextNode(node.next);
    }else{
      return node;
    }
  }
  return{
    root: createNode(value),
    appendNode: function(value){
      let head = CheckNextNode(this.root);
      head.next = createNode(value);
    },
    prependNode: function(value){
      let tail = checkPreviousNode(this.root);
      tail.previous = createNode(value);
    }
  }
}

const list = List(89);
list.appendNode(98);
list.appendNode(9835);
list.appendNode(8245);
list.prependNode(9834);
list.prependNode(2345);
