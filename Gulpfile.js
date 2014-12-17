// File: Gulpfile.js
'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    jshint    = require('gulp-jshint'),
    historyApiFallback = require('connect-history-api-fallback');

// Developer server config
gulp.task('server', function() {
  connect.server({
    root: './',
    hostname: '0.0.0.0',
    port: 8080,
    livereload: true,
    middleware: function(connect, opt) {
      return [ historyApiFallback ];
    }
  });
});


// Reload automatic the browser html
gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});


// Search warnings and errors in js scripts and then show by console
gulp.task('jshint', function() {
  return gulp.src('./app/**/*.js')
    .pipe(jshint('.jshintrc'))  
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// The Watchmen
gulp.task('watch', function() {
  gulp.watch(['./**/*.html'], ['html']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

// By default, run this task
gulp.task('default', ['server','watch', 'jshint']);


