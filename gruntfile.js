module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      sass: ['.sass-cache'],
      css: ['resources/css'],
      postConcat: ['resources/css/js', 'resources/css/scss'],
      browserify: ['resources/js', 'spec/spec-bundle.js']
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.scss'],
          dest: 'resources/css',
          ext: '.css'
        }]
      }
    },
    concat: {
      dist: {
        options: {
          sourceMap: false
        },
        src: ['resources/css/**/*.css'],
        dest: 'resources/css/style.min.css'
      }
    },
    eslint: {
        options: {
            quiet: true
        },
        target: ['src/**/*.js']
    },
    browserify: {
      app: {
        src: ['src/**/*.js'],
        dest: 'resources/js/app-bundle.js',
        options: {
          transform: [
            "sassify",
            ["babelify", {
              "presets": ["es2015", "react"]
            }]
          ]
        }
      },
      test: {
        src: ['spec/**/*.js'],
        dest: 'spec/spec-bundle.js',
        options: {
          transform: [
            "sassify",
            ["babelify", {
              "presets": ["es2015", "react"]
            }]
          ]
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'src/**/*.js',
        tasks: ['clean:browserify', 'browserify:app']
      },
      scss: {
        files: 'src/**/*.scss',
        tasks: ['clean:sass', 'clean:css', 'sass', 'concat', 'clean:postConcat']
      },
      html: {
        files: 'index.html'
      }
    },
    connect: {
      app: {
        options: {
          port: 9010,
          hostname: 'localhost',
          base: './',
          livereload: true
        }
      },
      test: {
        options: {
          port: 9010,
          hostname: 'localhost',
          keepalive: false
        }
      },
      a11y: {
        options: {
          port: 9010,
          hostname: 'localhost',
          base: './'
        }
      }
    },
    jasmine: {
      test: {
        src: ['spec/**/*.js'],
        options: {
          specs: 'spec-bundle.js'
        }
      }
    },
    protractor: {
      options: {
        keepAlive: false,
        configFile: './protractor.conf.js'
      },
      all: {}
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/webdriver-manager/bin/',
          command: 'webdriver-manager start'
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('default', ['clean:sass', 'clean:css', 'clean:browserify', 'sass', 'concat', 'browserify:app', 'clean:postConcat']);
  grunt.registerTask('serve:watch', ['clean:browserify', 'eslint', 'sass', 'concat', 'browserify:app', 'connect:app', 'watch']);
  grunt.registerTask('a11y:test', ['clean:browserify', 'eslint', 'browserify:app', 'connect:a11y', 'protractor_webdriver:start', 'protractor:all']);
};
