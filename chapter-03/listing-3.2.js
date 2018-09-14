var assert = require('assert')
    var store = {
      nextId: 1,
      cache: {},
      add: function(fn) {
        if (!fn.id) {
          fn.id = this.nextId++;
          this.cache[fn.id] = fn;
          return true;
        }
      }
    };

    function ninja(){}

    function lowde(){}

    store.add(lowde)

    assert(store.add(ninja),
           console.log("Function was safely added."));
    assert(!store.add(ninja),
        console.log("But it was only added once."));

    console.log(store.cache)