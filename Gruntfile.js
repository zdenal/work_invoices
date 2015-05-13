/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    connect: {
      server: {
        options: {
          debug: true
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['assets/js/**/*.js']
      }
    },
    coffee: {
      all: {
        files: [{
          expand: true,
          cwd: 'assets/coffee/',
          src: ['**/*.coffee'],
          dest: 'assets/js/',
          ext: '.js'
        }]
      }
    },
    less: {
      all: {
        options: {
          yuicompress: true
        },
        files: [{
          expand: true,
          cwd: 'assets/less/',
          src: ['bootstrap.less', 'homepage.less'],
          dest: 'assets/css/',
          ext: '.css',
        }]
      }
    },
    watch: {
      scripts: {
        files: ['assets/coffee/**/*.coffee'],
        tasks: ['coffee']
      },
      css: {
        files: ['assets/less/**/*.less'],
        tasks: ['less']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
