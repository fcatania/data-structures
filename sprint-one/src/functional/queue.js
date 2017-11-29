var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var holder = storage[0];
    delete storage[0];

    var newStorage = {};
    var i = 0;
    for (var key in storage) {
      newStorage[i] = storage[key];
      i++;
    }
    storage = newStorage;
    
    return holder;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
