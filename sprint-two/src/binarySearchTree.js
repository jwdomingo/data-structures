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
    if (value === newBST.value) {
      return true;
    } else if (value < newBST.value && newBST.left) {
      return newBST.left.contains(value);
    } else if (value > newBST.value && newBST.right){
      return newBST.right.contains(value);
    }
    return false;
  };

  newBST.depthFirstLog = function (value){

  };

  return newBST; 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
