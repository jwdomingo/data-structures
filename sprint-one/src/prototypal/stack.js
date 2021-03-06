var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.stackSize] = val;
    this.stackSize++;
  },
  pop: function() {
    if (this.stackSize > 0) {
      var aux = this.storage[this.stackSize - 1];
      delete this.storage[this.stackSize - 1];
      this.stackSize--;
      return aux;
    }
  },
  size: function() {
    return this.stackSize;
  }
};