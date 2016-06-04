var gulp = require('gulp');
var ts = require('gulp-typescript');
// generate sourcemaps when using typescript
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
// used to upload to coveralls.io
var coveralls = require('gulp-coveralls');
// generates code coverage reports
var istanbul = require('gulp-istanbul');
// mocha is a testing framework
var mocha = require('gulp-mocha');
// more debug info when using gulp
var debug = require('gulp-debug');
// concat files
var concat = require('gulp-concat');
// run in sequence, should be supported in gulp@4.0
var runSequence = require('run-sequence');
// run shell commands from gulp
var shell = require('gulp-shell');

// remaps code coverage back to typescript files instead of plain js files
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
var writeReport = require('remap-istanbul/lib/writeReport');

// load typescript configuration file
var tsProject = ts.createProject('express-server/tsconfig.json');

// todo this task should be replaced with built in behaviour in gulp@4.0 when available. Re-add tasks as dependencies like build:backend on test-backend.
gulp.task('build-and-run-coverage-in-seq', function(callback) {
  runSequence('build:backend','test-backend', 'test-frontend', 'remap-istanbul-frontend',
              'remap-istanbul-backend', 'merge-coverage', callback);
});

gulp.task('test-frontend', shell.task([
  'ng build',
  'node node_modules/karma/bin/karma start config/karma.conf.js --single-run --no-auto-watch',
]))
  
gulp.task('remap-istanbul-frontend', function () {
  return gulp.src('./coverage/frontend/json/coverage-final.json')
    .pipe(remapIstanbul({
      fail: true,
      reports: {
        'lcovonly': 'coverage/lcov-frontend-remapped.info',
      }, basePath: 'src'
    }))
    .pipe(debug());
});

gulp.task('remap-istanbul-backend', function () {
  return gulp.src('./coverage/backend/coverage-final.json')
    .pipe(remapIstanbul({
      fail: true,
      reports: {
        'lcovonly': 'coverage/lcov-backend-remapped.info',
      }, basePath: 'express-server'
    }))
    .pipe(debug());
});




gulp.task('test-backend', function () {
  return gulp.src('./dist-server/**/*.js')
    .pipe(istanbul({ includeUntested: true }))
    .on('finish', function () {
      gulp.src('./express-server/**/*spec.js')
        .pipe(mocha({ reporter: 'spec' }))
        .pipe(istanbul.writeReports({
          dir: './coverage/backend',
            reporters: [ 'lcov', 'json' ],
          reportOpts: { dir: './coverage/backend' }
        }));
    });
});

gulp.task('merge-coverage', function() {
  return gulp.src(['./coverage/lcov-frontend-remapped.info', './coverage/lcov-backend-remapped.info'])
    .pipe(concat('lcov-frontend-backend-remapped.info'))
    .pipe(gulp.dest('./coverage/'));
});

gulp.task('coveralls', ['build-and-run-coverage-in-seq']
  , function () {
    return gulp.src('./coverage/lcov-frontend-backend-remapped.info')
      .pipe(coveralls());
  });