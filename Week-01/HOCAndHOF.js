
  function addTwice(f, v) {
    return f(f(v));
  }
// Takes function f and calls "TWICE".
  function add(v) {
    return v + 3;
  }
  const val = addTwice(add, 1);
  console.log("Result:", val);