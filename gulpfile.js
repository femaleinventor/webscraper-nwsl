const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const less = require('gulp-less');
const nodemon = require('gulp-nodemon');
// const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');

const del = require('del');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackstream = require('webpack-stream');
const webpackconfig = require('./webpack.config.js');

// const bundler = webpack(webpackconfig);
const folder = require('./config/folders').folder;

gulp.task('start', (done) => {
    nodemon({
        script: './server/init.js', 
        ext: 'js html', 
        env: { 'NODE_ENV': 'development' }, 
        done: done
      });
});

gulp.task('clean', () => {
    return del([folder.build.everything]);
});

gulp.task('test', () => {
    // return gulp.src(folder.test.everything, { read: false })
    //     .pipe(mocha())
});

let styles = () => {
    return gulp.src([folder.styles.everything])
        .pipe(plumber())
        .pipe(less({ paths: [folder.styles.everything ]}))
        .pipe(concat('styles.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(folder.build.path))
        .pipe(browserSync.stream())
};

let wb = () => {
    return gulp.src([folder.js.everything])
        .pipe(plumber())
        .pipe(webpackstream(webpackconfig, webpack))
        .pipe(gulp.dest(folder.build.path))
        .pipe(browserSync.stream())
};

gulp.task('watch', () => {
    gulp.watch(folder.styles.everything, styles);
    gulp.watch(folder.js.everything, wb);
    gulp.watch(folder.components.everything, wb);
    gulp.watch(folder.components.path + '/HTML.jsx', wb);
});

gulp.task('clean');
gulp.task('build', gulp.parallel('watch', styles));
gulp.task('default', gulp.parallel('start', 'build'));