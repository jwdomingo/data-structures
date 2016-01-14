var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.size = function() {
  return this.stackSize;
}

Stack.prototype.push = function(val) {
  this.storage[this.stackSize] = val;
  this.stackSize++;
}