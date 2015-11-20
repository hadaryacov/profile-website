var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('./less/**/*.less')
  	.pipe(less())
  	.pipe(minifyCSS())
  	.pipe(gulp.dest('./public/css'));

});

// gulp.task('minify-css', function() {
//   return gulp.src('styles/*.css')
//     .pipe(minifyCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./dist'));
// });



