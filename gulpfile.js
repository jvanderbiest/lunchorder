var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var server = require('gulp-express');
var watch = require('gulp-watch');
var coveralls = require('gulp-coveralls');
var istanbul = require('gulp-istanbul');
 

var tsProject = ts.createProject('express-server/tsconfig.json');

// SERVER
gulp.task('build:server', function () {
    var tsResult = gulp.src('express-server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist-server'))
});

 
gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['dist-server/server.js']);
});

gulp.task('compile-ts', function() {
    return tsProject.src() // instead of gulp.src(...) 
               .pipe(ts(tsProject))
               .js
               .pipe(gulp.dest('dist-server'));
});




gulp.task('default', ['compile-ts'], function() {
        return gulp.watch(['./**/*.ts'], ['compile-ts']);
});

gulp.task('coveralls', function() {return gulp.src('coverage/**/lcov.info')
  .pipe(coveralls()); });
// gulp.task('default', ['build:server', 'server']);