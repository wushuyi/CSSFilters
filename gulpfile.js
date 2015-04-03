/**
 * Created by shuyi.wu on 2015/4/1.
 */
'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    webpack = require('gulp-webpack');


gulp.task('compileES6', function () {
    return gulp.src('./assets/js-es6/functions.js')
        .pipe(webpack({
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('watch-compileES6', function () {
    return gulp.src('./assets/js-es6/functions.js')
        .pipe(webpack({
            watch: true,
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(rename('build.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('min', ['compileES6'], function () {
    return gulp.src('./assets/js/build.js')
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('clean', function (cb) {
    del('./assets/js/**', cb);
});

gulp.task('default', ['clean', 'min']);