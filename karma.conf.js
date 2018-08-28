module.exports = function (config) {
  config.set({
    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],
    files: [
      'node_modules/angular@' + config.client.args.version + '/angular.js',
      'node_modules/angular-mocks@' + config.client.args.version + '/angular-mocks.js',
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
