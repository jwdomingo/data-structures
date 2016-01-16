var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];

  if (this._storage.get(index) === undefined) {
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  } else {
    bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return;
      }
    }
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var test = this._storage.get(index).filter(function(tuple){
    return tuple[0] === k;
  })[0];
  
  return test ? test[1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      break;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */