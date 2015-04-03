var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

var tplData = require('./templates/projects.json');

gulp.task('default', function (){
  var templateData = tplData;
  var options = {
    ignorePartials: true,
    batch: './templates'
  };

  return gulp.src('templates/layout.hbs')
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'));
});
