const { src, series, dest, parallel, watch } = require('gulp');
  
const concat = require('gulp-concat');
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require("node-sass"));
const sourceMap = require('source-map');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload; //browser的方法 更新後~

function moveFonts() {
    return src("dev/fonts/*").pipe(dest("dist/fonts"));
}
exports.f = moveFonts;

function movePhp() {
    return src("dev/php/**").pipe(dest("dist/php"));
}

function moveIndex() {
    return src("dev/*.php").pipe(dest("dist/"));
}

function moveImg() {
    return src('dev/images/**').pipe(dest('dist/images/'));
}

function concatJSAndMove() {
    return src('dev/js/*.js').pipe(concat('all.js')).pipe(dest('dist/js/'));
}

function moveJS() {
    return src('dev/js/*.js').pipe(dest('dist/js/'));
}

function commonStyle() {
    return src('./dev/sass/all.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'expanded', // nested巢狀  // compressed壓縮  //expanded 原本
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css/'));
}

function pageStyle() {
    return src('dev/sass/pages/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'nested',
            }).on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css/pages/'));
}


function includeHTML() {
    return src('dev/*.html')
        .pipe(
            fileInclude({
                prefix: '@@',
                basepath: '@file',
            })
        )
        .pipe(dest('dist/'));
}


function killDist() {
    return src('dist', { read: false, allowEmpty: true }).pipe(
        clean({
            force: true,
        })
    );
}

exports.kill = killDist;
exports.u = series(killDist, parallel(moveImg, moveJS, commonStyle, pageStyle, includeHTML,moveFonts,movePhp));

exports.browser = function browsersync() {
    browserSync.init({
        // files: "**",
        // port: 3001,
        // notify: false, //禁用瀏覽器的通知元素
        // browser: "chrome",
        server: {
            baseDir: './dist', //跟目錄設定
            index: 'index_new.html', //需更改成自己頁面的名稱
            injectChanges: false,
        },
    });
    //與browser同步
    watch(['./dev/sass/**/*.scss', '!dev/sass/pages/*.scss'], commonStyle).on('change', reload);
    watch('./dev/sass/pages/*.scss', pageStyle).on('change', reload);
    watch('./dev/**/*.html', includeHTML).on('change', reload);
    watch('./dev/images/**', moveImg).on('change', reload);
    watch('./dev/js/*.js', moveJS).on('change', reload);
    watch('./dev/fonts/*', moveFonts).on('change',reload);
};

exports.w = function watchFiles() {
    watch(['./dev/sass/*.scss', '!dev/sass/pages/*.scss'], commonStyle);
    watch('./dev/sass/pages/*.scss', pageStyle);
    watch('./dev/**/*.html', includeHTML);
    watch('./dev/images/**', moveImg);
    watch('./dev/js/*.js', moveJS);
    watch('./dev/fonts/*', moveFonts);
    watch('./dev/php/*', movePhp);
};



//----package
// const cleanCSS = require('gulp-clean-css');
// const imagemin = require('gulp-imagemin');

// exports.img = function compressImg() {
//     return src('dev/img/**/*')
//         .pipe(imagemin())
//         .pipe(rename(function (path) {
//             path.basename += "-mini"
//         }))
//         .pipe(dest('images'))
// }