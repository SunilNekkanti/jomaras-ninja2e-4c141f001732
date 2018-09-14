var assert = require('assert')
    function samurai() {
      return "samurai here";
    }

    function ninja() {
      function hiddenNinja() {
        return "ninja here";
      }

      return hiddenNinja();
    }
    
    assert(samurai() === "samurai here", console.log("A samurai"));
    assert(ninja() === "ninja here", console.log("A ninja"));
