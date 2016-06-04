var gulp = require('gulp');
var ts = require('gulp-typescript');
var server = require('gulp-express');
var sourcemaps = require('gulp-sourcemaps');

// load typescript configuration file
var tsProject = ts.createProject('express-server/tsconfig.json');


// SERVER
gulp.task('build:backend', function () {
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write('.',{includeContent:false, sourceRoot:'.'}))
    .pipe(gulp.dest('dist-server'))
});

gulp.task('backend', ['build:backend'], function () {
  // Start the server at the beginning of the task 
  server.run(['dist-server/server.js']);
});

gulp.task('backend-di', ['build:backend'], function () {
  // Start the server at the beginning of the task 
  server.run(['dist-server/kernel.js']);
});

gulp.task('default', ['backend-di'], function () {
  return gulp.watch(['./**/*.ts'], ['build:backend']);
});
