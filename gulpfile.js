var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');
var server = require('gulp-express');
var watch = require('gulp-watch');
var coveralls = require('gulp-coveralls');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var merger = require('lcov-result-merger');
var debug = require('gulp-debug');
var savefile = require('gulp-savefile');

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


gulp.task('test-server', function () {
    return gulp.src('./express-server/**/*.js')
      .pipe(istanbul({includeUntested: true}))
      .on('finish', function () {
        gulp.src('./express-server/**/*spec.js')
          .pipe(mocha({reporter: 'spec'}))
          .pipe(istanbul.writeReports({
            dir: './coverage/server-unit-test-coverage',
            reporters: [ 'lcov' ],
            reportOpts: { dir: './coverage/server-unit-test-coverage'}
          }));
      });
  });

gulp.task('merge-coverage', function() {
   gulp.src('./coverage/**/lcov.info')
  .pipe(debug())
    .pipe(merger())
    .pipe(savefile());
//   .pipe(coveralls());
    // .pipe(debug()).pipe(savefile('./coveralls/')).pipe(debug());   
});

//  gulp.task('merge-coverage', function() {
//  mergefile = merger('/coverage/**/lcov.info');
//   mergefile.pipe(gulp.dest('/reports/merge/merge.info'));
// }); 

gulp.task('default', ['compile-ts'], function() {
        return gulp.watch(['./**/*.ts'], ['compile-ts']);
});

gulp.task('coveralls', ['merge-coverage'], function() { return gulp.src('./lcov.info')
  .pipe(coveralls()); });
// gulp.task('default', ['build:server', 'server']);