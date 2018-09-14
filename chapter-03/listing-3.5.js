    function myFunctionDeclaration(){
      function innerFunction() {}
    }

    var myFunc = function(){};
    myFunc(function(){
      return function(){};
    });

    (function namedFunctionExpression () {
    })();

    +function(){}();
    -function(){}();
    !function(){}();
    ~function(){}();
