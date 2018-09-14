var assert = require('assert')
		function whatsMyContext() {
      return this;
    }

    // assert(whatsMyContext() === window,
    //   "Function call on window"));
    //
    // var getMyThis = whatsMyContext;
    //
    // assert(getMyThis() === window,
    //   "Another function call in window"));


    var ninja1 = {
      getMyThis: whatsMyContext
    };

    assert(ninja1.getMyThis() === ninja1,
      console.log("Working with 1st ninja"));

    var ninja2 = {
      getMyThis: whatsMyContext
    };

    assert(ninja2.getMyThis() === ninja2,
      console.log("Working with 2nd ninja"));



