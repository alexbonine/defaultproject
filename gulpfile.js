var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var jasmine = require('gulp-jasmine');
var config = require('./config');

/* Available tasks: default, watch, build, serve, test, sass, markup, browserify */

var bundler = browserify({
  // Required watchify args
  cache: {}, packageCache: {}, fullPaths: true,
  // Specify the entry point of your app
  entries: config.browserify.entry,
  // Enable source maps
  debug: config.browserify.debug
});
bundler = watchify(bundler);
bundler.on('update', bundle);

function bundle() {
  gutil.log('Bundling JS');

  return bundler.bundle()
    .on('error', handleErrors)
    .pipe(source(config.browserify.outputName))
    .pipe(gulp.dest(config.browserify.dest))
    .pipe(browserSync.reload({stream: true, once: true }));
}

function handleErrors () {
  var args = Array.prototype.slice.call(arguments);
  gutil.log(args[0].message);
  this.emit('end');
}

gulp.task('browserify', function () {
  return bundle();
});

gulp.task('markup', function() {
  return gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest))
    .pipe(browserSync.reload({stream: true, once: true }));
});

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write(config.sass.maps))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream: true, once: true }));
});

gulp.task('test', function () {
  return gulp.src(config.test.src)
    .pipe(jasmine());
})

gulp.task('serve', ['build'], function () {
  browserSync(config.browserSync);
});

gulp.task('watch', ['serve'], function () {
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.markup.src, ['markup']);
});

gulp.task('build', ['browserify', 'sass', 'markup']);

/* Bundle and serve app */
gulp.task('default', ['watch']);