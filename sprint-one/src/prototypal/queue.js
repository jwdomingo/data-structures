var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.queueSize = 0;

  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  }
};


