var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.queueSize = 0;
  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from){
  for (var item in from) {
    to[item] = from[item];
  }
};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.queueSize] = val;
    this.queueSize++;
  },
  size: function(){
    return this.queueSize;
  }
};


