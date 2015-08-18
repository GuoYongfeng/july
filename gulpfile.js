var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

var globs = {
	'css': ['src/less/*.less', 'src/less/**/*.css'],
	'js': 'src/**/*.js',
	'html': 'src/**/*.html',
	'image': 'src/images/**'
};

gulp.task('less', function () {
    gulp.src(globs.css)
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('images', function(){
    gulp.src(globs.image)
        .pipe(gulp.dest('public/image'));
});

gulp.task('js', function(){
    gulp.src(globs.js)
        .pipe(gulp.dest('public'));
});

gulp.task('view', function () {
    gulp.src(globs.html)
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
    gulp.watch(globs.css, ['less']);
    gulp.watch(globs.js, ['js']);
    gulp.watch(globs.image, ['image']);
    gulp.watch(globs.html, ['view']);
});


gulp.task('serve', function() {
    browserSync({
    	files: ['src/**/*.*', 'public/**/*.*'],
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['watch', 'serve']);

