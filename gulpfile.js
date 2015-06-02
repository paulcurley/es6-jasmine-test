var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    browserify(['./src/*.js', './test/appSpec.js'])
    .transform(babelify)
    .bundle()
    .on('error', function(err){
        console.log(err);
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./src'));
    
    gulp.src(['src/main.js'])
    .pipe(jasmine());
});

var karma = require('karma').server;

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done);
});
