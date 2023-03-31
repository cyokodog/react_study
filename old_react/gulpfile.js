const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');

const proj = ['01', '02', '03', '04', '05', '06', '07'];

const defineProjTask = (name, task) => {
  const tasks = [];
  const defineTask = (dir) => {
    const taskName = name + ':'+dir;
    tasks.push(taskName);
    gulp.task(taskName, task(dir));
  };
  proj.forEach(defineTask);
  gulp.task(name, tasks);
};

defineProjTask('es:convert', (dir) => {
  return (cb) => {
    return browserify(dir + '/main.js', { debug: true })
    // .babelrcを書かない場合は以下のようにする
      // .transform(babelify,{presets: ["react","es2015"]})
      .transform(babelify)
      .bundle()
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest(dir));
  };
});

defineProjTask('watch', (dir) => {
  return (cb) => {
    gulp.watch([dir + '/**/*.jsx', dir + '/main.js', dir + '/*/*.js'], () => {
      runSequence('es:convert:' + dir, browserSync.reload);
    })
  };
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

gulp.task('default', () => {
  runSequence(
    'es:convert',
    'serve',
    'watch'
  );
});
