var assert = require('assert')
function whatever(a, b, c){
      assert(a === 1, 'The value of a is 1');
      assert(b === 2, 'The value of b is 2');
      assert(c === 3, 'The value of c is 3');

      assert(arguments.length === 5,
        'We’ve passed in 5 parameters');

      assert(arguments[0] === a,
        console.log('The first argument is assigned to a'));
      assert(arguments[1] === b,
        console.log('The second argument is assigned to b'));
      assert(arguments[2] === c,
        'The third argument is assigned to c');

      assert(arguments[3] === 4,
        console.log('We can access the fourth argument'));
      assert(arguments[4] === 5,
        console.log('We can access the fifth argument'));
    }
    
    whatever(1,2,3,4,5);

