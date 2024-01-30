function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return returnsANamedFunction
}

let returnsAnAnonymousFunction = function() {
  return function() {
  }
}