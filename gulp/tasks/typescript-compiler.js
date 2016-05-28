var gulp = require('gulp');
var ts = require('gulp-typescript');

// load typescript configuration file
var tsProject = ts.createProject('express-server/tsconfig.json');

gulp.task('compile-ts', function () {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js
    .pipe(gulp.dest('dist-server'));
});

gulp.task('default', ['compile-ts'], function () {
  return gulp.watch(['./**/*.ts'], ['compile-ts']);
});
