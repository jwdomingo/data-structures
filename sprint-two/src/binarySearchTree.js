var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  newBST.insert = function (value){
    if (value < newBST.value) {
      if (newBST.left) {
        newBST.left.insert(value);
      } else {
        newBST.left = BinarySearchTree(value);
      } 
    } else {
      if (newBST.right) {
        newBST.right.insert(value);
      } else {
        newBST.right = BinarySearchTree(value);
      }
    }
  };

  newBST.contains = function (value){

  };

  newBST.depthFirstLog = function (value){

  };

  return newBST; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
