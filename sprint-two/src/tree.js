var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
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

};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
