var assert = require('assert')
    var puppet = {
      rules: false
    };

    function Emperor() {
      this.rules = true;
      return puppet;
    }

    var emperor = new Emperor();

    assert(emperor === puppet,
      console.log("The emperor is merely a puppet!"));
    assert(emperor.rules === false,
      console.log("The puppet does not know how to rule!"));
