function createNode(value){
  return{
    value: value,
    next: null,
    previous: null,
  }
}

function List(value){

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
      let last = CheckNextNode(this.root);
      last.next = createNode(value);
      console.log(last.next);
    }
  }
}

const list = List(89);
list.appendNode(98);
list.appendNode(9835);
list.appendNode(8245);
