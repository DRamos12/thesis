// Karma configuration
// Generated on Fri Mar 11 2016 16:23:29 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'client/www/lib/ionic/js/ionic.bundle.js',
      'client/www/lib/angular-mocks/angular-mocks.js',
      'client/www/lib/a0-angular-storage/dist/angular-storage.js',

      'client/www/lib/ionic/js/angular-ui/angular-ui-router.js',
      'client/www/lib/angular-animate/angular-animate.js',
      'client/www/lib/angular-sanitize/angular-sanitize.js',
      'client/www/lib/auth0-lock/build/auth0-lock.js',
      'client/www/lib/auth0-angular/build/auth0-angular.js',
      'client/www/lib/angular-jwt/dist/angular-jwt.js',
      'client/www/lib/angular-socket-io/socket.js',
      'client/www/lib/angular-facebook/lib/angular-facebook.js',
      'client/www/lib/jquery/dist/jquery.min.js',

      'client/www/ang/**/*.js',
      'client/www/ang/login/login.js',

      'test/unit-tests/controller-tests.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};