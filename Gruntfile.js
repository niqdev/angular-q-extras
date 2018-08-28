var niv = require('npm-install-version');

/*global module:false*/
module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  var pkg = require('./package.json');

  grunt.initConfig({
    pkg: pkg,
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> */\n',

    clean: {
      dist: ['dist']
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['src/**/*.js', 'test/**/*.js', 'Gruntfile.js']
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    // Build multiple karma instances for each Angular versions
    karma: (function() {
      var configs = {};

      pkg.angularVersions.forEach(function(version) {
        configs[version] = {
          configFile: 'karma.conf.js',
          client: {
            args: {
              version: version
            }
          }
        };
      });

      return configs;
    }())
  });

  grunt.registerTask('install-angular', function() {
    grunt.log.ok('Install Angular ' + pkg.angularVersions);

    pkg.angularVersions.forEach(function(version) {
      niv.install('angular@' + version, {quiet: true});
      niv.install('angular-mocks@' + version, {quiet: true});
    });
  });

  grunt.registerTask('test', ['install-angular', 'karma']);

  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'uglify']);
};
