var gulp = require('gulp'),
    less= require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
	watch= require('gulp-watch');

gulp.task('less', function(){
    return gulp.src('../dev/*.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('../css'));
});
gulp.task('watch',function(){
	gulp.watch('../dev/*.less', ['less']);
});
	gulp.task('default',['less','watch']);