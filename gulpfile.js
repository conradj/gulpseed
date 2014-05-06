// include gulp
var gulp = require('gulp'); 
var browserify = require('browserify');  
var source = require('vinyl-source-stream');
//var clean = require('gulp-clean');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var filesize = require('gulp-filesize');
// include plug-ins
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');

/*gulp.task('clean', function () {  
  return gulp.src('build', {read: false})
    .pipe(clean());
}); */
 
// JS hint task
gulp.task('jshint', function() {
  return gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return browserify('./src/scripts/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('app.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('default', function() {  
    var server = livereload();
    gulp.watch("./src/scripts/*.js", ["scripts", "jshint"]);
    
    gulp.watch('./build/**').on('change', function(file) {
        console.log(file.path);
        server.changed(file.path);
    });

        //gulp.run('watch');
    //gulp.watch('css/**', function(event) {
    //    gulp.run('styles');
    //})
});