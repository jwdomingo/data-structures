var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    var item;

    if (queueSize > 0) {
      item = storage[0];
      delete storage[0];
      queueSize--;

      for (var key in storage) {
        storage[key - 1] = storage[key];
      }
      
      delete storage[key];
    }

    return item;
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
