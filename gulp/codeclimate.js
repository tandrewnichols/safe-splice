var gulp = require('gulp');
var codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', function() {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate({
        token: '2b31a8a43543590667aed914698057f37eceae7d53af6873b553f0aefd40f60d'
      }));
  }
});

