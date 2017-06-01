var gulp   = require('gulp'),
    // jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');

/* jshint task would be here */

gulp.task('build-css', function() {
    return gulp.src('source/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/assets/stylesheets'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
    // gulp.watch('source/javascript/**/*.js', ['jshint']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
});