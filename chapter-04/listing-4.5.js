var assert = require('assert')
  		function ninja() {
        return this;
      }

      function samurai() {
        "use strict";
        return this;
      }
      console.log(ninja().constructor.name)
      // assert(ninja() === window,
      //   "In a 'non-strict' ninja function, " +
      //   "the context is the global window object");

      assert(samurai() === undefined,
       console.log( "In a 'strict' samurai function, " +
        "the context is undefined"));
