var assert = require('assert')
"use strict"
    function multiMax(first, ...remainingNumbers){
        console.log(remainingNumbers)
    var sorted = remainingNumbers.sort(function(a, b){
         return b - a;
      });


      return first * sorted[0];
    }
    assert(multiMax(3, 1, 2, 3, 4, 8) == 24,
          console.log("3*3=9 (First arg, by largest.)"));

