var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;

  var traverseTree = function(node){
    if (node.value === target) {
      result = true;
      return;
    }  
    for (var child = 0; child < node.children.length; child++) {
      if (node.children[child] === target) {
        result = true;
        return;
      } else if (node.children.length > 0) {
        traverseTree(node.children[child]);
      }
    }
  };

  traverseTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
