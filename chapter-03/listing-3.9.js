var assert = require('assert')
	  "use strict"
	    function performAction(ninja, action = "skulking"){
	      return ninja + " " + action;
	  	}

		  assert(performAction("Fuma") === "Fuma skulking",
		         console.log("The default value is used for Fuma"));

		  assert(performAction("Yoshi") === "Yoshi skulking",
		         console.log("The default value is used for Yoshi"));

		  assert(performAction("Hattori") === "Hattori skulking",
		         console.log("The default value is used for Hattori"));

		  assert(performAction("Yagyu", "sneaking") === "Yagyu sneaking",
		         console.log("Yagyu can do whatever he pleases, even sneak!"));

