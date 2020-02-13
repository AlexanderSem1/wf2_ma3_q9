const gulp = require('gulp'); 
const { src, dest } = require('gulp'); 
const less = require('gulp-less');
const minifyCSS = require('gulp-csso'); 
const minifyImages = require('gulp-imagemin'); 
const browserSync = require('browser-sync').create(); 

function css() {
    return src('./less/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(dest('css')) 
        .pipe(browserSync.stream()) 
}; 

function images() {
    return src('images/*')
        .pipe(minifyImages())
        .pipe(dest('miniimages')) 
}; 

function watch() {
    browserSync.init({
        server: {
            baserDir: './',
        }
    }); 
    gulp.watch('./less/**/*.less', css); 
    gulp.watch('./*.html').on('change', browserSync.reload);
}; 

exports.watch = watch;
exports.minifyimages = images; 