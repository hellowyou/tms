'use strict';
import gulp from 'gulp';
import del from 'del';
import pkg from './package.json';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import log from 'fancy-log';
import { spawn } from 'child_process';
import chalk from 'chalk';

const $ = gulpLoadPlugins();
const cache = new $.fileCache();
const PORT = process.env.PORT || 4000;

gulp.task('compile:cache', () =>
  gulp.src('./src/**/*.js')
    .pipe(cache.filter())
    .pipe($.babel())
    .pipe(cache.cache())
    .pipe(gulp.dest('./dist'))
);

gulp.task('compile', () =>
  gulp.src('./src/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('dist'))
);

gulp.task('watch', ['compile:cache'], () => {
  log(`Browsersync proxy http://localhost:${PORT}`);
  browserSync.init({
    proxy: `http://localhost:${PORT}`
  });

  let stream = $.nodemon({
    script: 'dist/server.js',
    watch: 'src',
    tasks: ['compile:cache']
  }).on('start', () => {
    let started = false;
    if(!started) {
      browserSync.reload();
      started = true;
    }
  }).on('restart', () => browserSync.notify("Restarting..."));

  return stream;
});

gulp.task('clean', () => del(['dist/*'], {dot: true}));

gulp.task('serve', (cb) => {
  const node = spawn('node', ['dist/server.js']);

  node.stdout.on('data', function (data) {
    log(data.toString());
  });

  node.stderr.on('data', function (data) {
    log(chalk.red(data.toString()));
  });

  node.on('exit', function (code) {
    log('child process exited with code ' + code.toString());
  });
});

gulp.task('build:serve', (cb) => runSequence('clean', 'compile', 'serve', cb));

gulp.task('default', ['build:serve']);
