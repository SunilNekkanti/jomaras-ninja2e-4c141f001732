var assert = require('assert')
    function performAction(ninja, action = "skulking",
                           message = ninja + " " + action) {
      return message;
    }

    assert(performAction("Yoshi") === "Yoshi skulking", console.log("Yoshi is skulking"));
