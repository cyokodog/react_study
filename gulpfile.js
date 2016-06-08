const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');

gulp.task('es:convert', () => {

  const defineTask = (dir) => {
    browserify(dir + '/app.jsx', { debug: true })
      // .babelrcを書かない場合は以下のようにする
      // .transform(babelify,{presets: ["react","es2015"]})
      .transform(babelify)
      .bundle()
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(dir));
  };

  ['01'].forEach(defineTask);







});

gulp.task('watch', () => {
  gulp.watch('./*.jsx', ['es:convert'])
});

gulp.task(
  'serve', () => {
    browserSync({
      server: {
        baseDir: '.'
      }
    });
  }
);

gulp.task('default', ['es:convert', 'watch', 'serve']);
