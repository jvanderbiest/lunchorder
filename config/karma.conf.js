module.exports = function (config) {
  var configuration = {
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage')
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      { pattern: 'dist/vendor/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'dist/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false },

      { pattern: 'config/karma-test-shim.js', included: true, watched: true },

      // Distribution folder.
      { pattern: 'dist/**/*', included: false, watched: true }
    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/vendor/**/*.spec.js'
    ],
    preprocessors: {
      'dist/!(vendor)/**/!(*spec).js': ['coverage']
    },

    coverageReporter: {
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [
        { type: 'lcov', subdir: 'frontend/lcov' },
        { type: 'html', subdir: 'frontend/html' },
        { type: 'json', subdir: 'frontend/json', file: 'coverage-final.json' }
      ]
    },
    // preprocessors: { '/src/app/**/*.js' : 'coverage' },
    reporters: ['progress', 'coverage'],
    // coverageReporter: {
    //     type : 'lcov',
    //     dir : 'coverage/',
    //     subdir: '.'
    //   },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: false
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['PhantomJS'];
  }

  config.set(configuration);
};