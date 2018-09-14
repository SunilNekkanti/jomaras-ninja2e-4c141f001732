var assert = require('assert')
    function sum() {
      var sum = 0;
      for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
      }
      return sum;
    }

    assert(sum(1, 2) === 3, console.log("We can add two numbers"));
    assert(sum(1, 2, 3) === 6, console.log("We can add three numbers"));
    assert(sum(1, 2, 3, 4) === 10, console.log("We can add four numbers"));
