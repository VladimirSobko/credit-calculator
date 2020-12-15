const gulp = require('gulp');
const concat = require('gulp-concat');

function styles() {
  return gulp.src('./src/styles/general.css')
   .pipe(concat('./public/styleguide.min.css'))
   .pipe(gulp.dest('.'));
}

let build = gulp.series(styles);

function watch() {
  gulp.watch(['./src/styles/*.css', './src/styleguide-template/*.*'],
    build);
}
 
exports.watch = watch;
exports.styles = styles;

gulp.task('default', watch);
gulp.task('build', build);