var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  gulp.src('public/css/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('public/css'));
});

gulp.task('compress', function() {
  gulp.src([
    'public/js/lib/*.js',
    'public/js/*.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'compress', 'watch']);
