var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.stackSize = 0;
  extend(newStack, stackMethods);
  console.log("newStack: ", newStack);
  return newStack;
};

var stackMethods = {
  push:  function(val){
    this.storage[this.stackSize] = val;
    this.stackSize++;
  },
  pop:   function(){},
  size: function(){
    return this.stackSize;
  }  
};


