module.exports = function (config) {

  config.set({
    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],
    files: [
      'bower/angular/angular.js',
      'bower/angular-mocks/angular-mocks.js',
      'bower/ng-lodash/build/ng-lodash.js',
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
