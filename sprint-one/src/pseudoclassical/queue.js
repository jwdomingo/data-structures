var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;
};

Queue.prototype.size = function(){
  return this.queueSize;
};

Queue.prototype.enqueue = function(val){
  this.storage[this.queueSize] = val;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  if (this.queueSize > 0) {
    var aux = this.storage[0];
    delete this.storage[0];
    this.queueSize--;

    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }

    delete this.storage[key];
    return aux;
  }  
};
