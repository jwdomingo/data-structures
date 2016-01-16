var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.resize = function(factor) {
  var oldStorage = this._storage;
  this._limit = Math.floor(this._limit * factor);
  this._storage = LimitedArray(this._limit);
  var self = this;
  var index;

  oldStorage.each(function(bucket){
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        self.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  
  if (this._storage.get(index) === undefined) {
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    this._size++;
  } else {
    bucket = this._storage.get(index);
    var replaced = false;

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        replaced = true;
      }
    }

    if (!replaced) {
      bucket.push([k, v]);
      this._storage.set(index, bucket);
      this._size++;
    }
  }
  
  //double array size
  if (this._size > (0.75 * this._limit)) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    console.log('limit: ', this._limit);
    console.log('k:',k);
    console.log('index:',index);
    console.log('this._storage.get(index):',this._storage.get(index));
  }

  if (this._storage.get(index)) {
    var ifKeyExists = this._storage.get(index).filter(function(tuple){
      return tuple[0] === k;
    })[0];  
  }
  
  return ifKeyExists ? ifKeyExists[1] : undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size--;
      break;
    }
  }
  this._storage.set(index, bucket);

  if (this._size <= 0.25 * this._limit) {
    this.resize(0.5);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */