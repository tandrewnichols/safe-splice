(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  var splice = function(arr) {
    var args = [].slice.call(arguments, 1);
    // Clone the original array
    var copy = arr.slice(0);
    copy.splice.apply(copy, args);
    return copy;
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = splice;
  } else {
    window.safeSplice = splice;
  }
})();
