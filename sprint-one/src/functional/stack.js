var Stack = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    var item;

    if (storage.hasOwnProperty(stackSize - 1)) {
      item = storage[stackSize - 1];
      delete storage[stackSize - 1];
      stackSize--;
    }

    return item;
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
