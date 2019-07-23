const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css')
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinyPNG = require('gulp-tinypng-compress');


gulp.exports('minify-css', function(done){
    gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'))
  done()
});
gulp.exports('minify-js', function(done){
    gulp.src('./src/js/*.js')
    .pipe(minify({
      ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('dist/js/'))
  done()
});
gulp.exports('minify-html', function(done){
    gulp.src('./src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done()
});
gulp.exports('move-fonts', function(done){
  gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'))
done()
});
gulp.exports('tinypng', function (done) {
  gulp.src('./src/img/*/*.{png,jpg,jpeg}')
       .pipe(tinyPNG({
           key: 'D47E7DbIJxCb8zKUnafAgiZKFBjOXMC4'
       }))
      .pipe(gulp.dest('dist/img/'));
      done()
});
gulp.exports('default', gulp.series('minify-css','minify-js', 'minify-html', 'move-fonts', 'tinypng', function (done){
  
  done();
}));