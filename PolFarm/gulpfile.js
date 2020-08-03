const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const jsminify = require('gulp-terser');
const cssminify = require('gulp-cssmin');
 
function js(){
  return gulp.src('public/js/app.js')
    .pipe(concat('app.mis.js'))
    .pipe(jsminify())
    .pipe(gulp.dest('public/js'));
}
function css(){
    return gulp.src('public/css/app.css')
      .pipe(concat('app.mis.css'))
      .pipe(cssminify())
      .pipe(gulp.dest('public/css'));
  }
// Don't work in this time

// exports.js = js;
// exports.css = css;

// exports.default = parallel(js, css);