var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function(callback) {
  runSequence('clean', ['html', 'styles', 'vendor', 'scripts'], 'browser-sync', 'watch', callback);
});
