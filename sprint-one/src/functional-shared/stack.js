var extend = function(obj){
  for (var item in obj) {
    for (var key in item) {
      obj[key] = item[key];
    }
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  var storage = {};
  var stackSize = 0;
  return newStack;
};

var stackMethods = {
  push:  function(val){},
  pop:   function(){},
  size:  function(){
    return stackSize;
  }
};


