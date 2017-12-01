var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
  //case for arrays
  //case for objects

};

setPrototype.contains = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var storage = this._storage;
  for (var i = 0; i < storage.length; i++) {
    if (storage[i] === item) {
      storage.splice(i, 1);
    }
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
  add() = O(1)
  contains() = O(1)
  remove() = O(1)
 */


// implementation with arrays
/*
Set() = a data structure that holds unique values, but can hold potentially different types of values.
storage = [] // an array that keeps track of unique values.
Set.add() = //iterate through storage
            //(exists) => don't add to storage.
            //(!exists) => push to storage.
Set.contains() = //iterate through storage
                 //(exists) => output true.
                 //(!exists) => output false.
Set.remove() = //iterate through storage.
               //(exists) => remove it and splice storage accordingly.
               //(!exists) => do nothing.

The difference of creating a set via arrays will result in the functions all being O(n) (linear time).
*/