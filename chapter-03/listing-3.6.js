var assert = require('assert')
    var greet = name => "Greetings " + name;
    assert(greet("Oishi") === "Greetings Oishi", console.log("Oishi is properly greeted"));

    var anotherGreet = function(name){
      return "Greetings " + name;
    }
    assert(anotherGreet("Oishi") === "Greetings Oishi",
         console.log("Again, Oishi is properly greeted"));

