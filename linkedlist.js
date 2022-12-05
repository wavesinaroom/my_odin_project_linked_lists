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
  function checkNextNode(node){
   if(node.next!==null){
     return checkNextNode(node.next);
   }else{
     return node;
   }
  }

  return{
    root: createNode(value),
    appendNode: function(value){
      let head = checkNextNode(this.root);
      head.next = createNode(value);
    },
    prependNode: function(value){
      const temporal = this.root; 
      this.root =createNode(value);
      this.root.next = temporal;
    },
    getHead: function(){
      return checkNextNode(this.root);
    },
    getTail: function(){
      return this.root;
    }
  }
}

const list = List(89);
list.appendNode(98);
list.appendNode(9835);
list.appendNode(8245);
list.prependNode(9834);
list.prependNode(2345);
console.log(list.getHead());
console.log(list.getTail());
