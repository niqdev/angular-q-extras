module.exports = function (config) {

  config.set({
    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.test.js'
    ],
    port: 9999,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true,
    logLevel: config.LOG_INFO,
    colors: true
  });

};
