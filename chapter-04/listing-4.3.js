var assert = require('assert')
    function infiltrate(person) {
      assert(person === 'gardener',
        console.log('The person is a gardener'));
      assert(arguments[0] === 'gardener',
        console.log('The first argument is a gardener'));

      arguments[0] = 'ninja';

      assert(person === 'ninja',
        console.log('The person is a ninja now'));
      assert(arguments[0] === 'ninja',
        console.log('The first argument is a ninja'));

      person = 'gardener';

      assert(person === 'gardener',
        console.log('The person is a gardener once more'));
      assert(arguments[0] === 'gardener',
        console.log('The first argument is a gardener again'));
    }

    infiltrate("gardener");
