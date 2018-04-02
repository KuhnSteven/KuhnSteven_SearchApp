var gulp = require('gulp');
var sass = require('gulp-scss');

//builds it to transfer from scss to css
/*global require*/
(function (r) {
  "use strict";
  var scss = r("gulp-scss");
  var gulp = r("gulp");
  gulp.task("scss", function () {
    gulp.src(
      "/scss/**/*.scss"
    ).pipe(scss(
      { "bundleExec": true }
    )).pipe(gulp.dest("/css"));
  });
}(require));

//watches it to make the transition from scss to css
gulp.task('watch', function () {
  gulp.watch('./scss/*.scss', ['css']);
});