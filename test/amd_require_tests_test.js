'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.amd_require_tests = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/requireSpecs.js');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'Creates file that requires specs based on default template');

    test.done();
  },
  custom_template: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/requireSpecsCustomTemplate.js');
    var expected = grunt.file.read('test/expected/custom_template');
    test.equal(actual, expected, 'Creates file that requires specs based on a custom template');

    test.done();
  },
  custom_path: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/requireSpecsCustomPath.js');
    var expected = grunt.file.read('test/expected/custom_path');
    test.equal(actual, expected, 'Creates file that requires specs relative to a specific path');

    test.done();
  }
};
