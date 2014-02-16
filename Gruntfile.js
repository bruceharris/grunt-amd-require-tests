/*
 * grunt-amd-require-tests
 * https://github.com/bruce.harris/grunt-amd-require-tests
 *
 * Copyright (c) 2014 Bruce Harris
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    amd_require_tests: {
      default_options: {
        files: {
          'tmp/requireSpecs.js': ['test/**/*Spec.js']
        },
      },
      custom_template: {
        options: {
          templateFile: 'test/fixtures/custom.template'
        },
        files: {
          'tmp/requireSpecsCustomTemplate.js': ['test/**/*Spec.js']
        },
      },
      custom_path: {
        options: {
          path: 'test/'
        },
        files: {
          'tmp/requireSpecsCustomPath.js': ['**/*Spec.js']
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'amd_require_tests', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
