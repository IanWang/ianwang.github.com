var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var watcher = gulp.watch('./templates/*.hbs', ['default']);


watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', function (){
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
