var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    for (var key in storage) {
      var holder = storage[key];
      delete storage[key];
      someInstance.refactorStorage();
      return holder;
    }
  };

  someInstance.refactorStorage = function() {
    var newStorage = {};
    var i = 0;
    for (var key in storage) {
      newStorage[i] = storage[key];
      i++;
    }
    storage = newStorage;
  }

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
