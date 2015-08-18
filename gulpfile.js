var gulp = require('gulp'),
   less = require('gulp-less');

var paths = {
	'css': ['app/**/*.less', 'static/css'],
	'js': 'app/**/*.js',
	'html': 'app/**/*.html'
};

gulp.task('css', function () {
   gulp.src(paths.css)
      .pipe(less())
      .pipe(gulp.dest('Public/Css'));
});

gulp.task('js', function () {
   gulp.src(paths.js)
      .pipe(gulp.dest('Public/Js'));
});

gulp.task('html', function () {
   gulp.src(paths.html)
      .pipe(gulp.dest('Public/View'));
});

gulp.task('server', ['html', 'css', 'js']);
