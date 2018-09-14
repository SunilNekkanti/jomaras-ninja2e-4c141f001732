var assert = require('assert')

    function isPrime(value) {
      if (!isPrime.answers) {
        isPrime.answers = {};
      }

      if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value];
      }

      var prime = value !== 1;

      for (var i = 2; i < value; i++) {
        if (value % i === 0) {
          prime = false;
          break;
        }
      }

      return isPrime.answers[value] = prime;
    }

    assert(isPrime(5), console.log("5 is prime!" ));
    assert(isPrime.answers[5], console.log("The answer was cached!" ));