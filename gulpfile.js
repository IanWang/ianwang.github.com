var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var watcher = gulp.watch('./templates/*.hbs', ['default']);


watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});


gulp.task('cssmin', function () {
  return gulp.src([
      'css/normalize.css',
      'css/helpers.css',
      'css/skeleton.css',
      'css/style.css'
    ])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', function () {
  return gulp.src('img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('build', function (){
  var templateData = require('./templates/projects.json');
  var options = {
    ignorePartials: true, 
    batch: './templates' // filepath of partials
  };

  return gulp.src('templates/layout.hbs')
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['cssmin', 'imagemin', 'build'])
