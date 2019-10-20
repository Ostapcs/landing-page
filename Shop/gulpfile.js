const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    uglifyES6 = require('gulp-uglify-es'),
    minCSS = require('gulp-minify-css'),
    // imagemin    = require('gulp-imagemin'),
    // pngquant    = require('imagemin-pngquant'),
    // imageminOptipng = require('imagemin-optipng'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', async function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('jquery+bootstrap', async function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery-on-scrolled-to/on-scrolled-to.min.js'
    ])
        .pipe(concat('jquery+bootstrap.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/libs'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('mainJS', async function () {
    return gulp.src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglifyES6.default())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('vivus', async function () {
    return gulp.src([
        'node_modules/vivus/dist/vivus.min.js'
    ])
        .pipe(gulp.dest('app/libs'))
});

gulp.task('aos', async function () {
    return gulp.src([
        'node_modules/aos/dist/aos.js'
    ])
        .pipe(concat('aos.min.js'))
        .pipe(uglifyES6.default())
        .pipe(gulp.dest('app/libs'))
});

gulp.task('slick', async function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.min.js'
    ])
        .pipe(gulp.dest('app/libs'));
});

gulp.task('slickCSS', async function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick-theme.css',
        'node_modules/slick-carousel/slick/slick.css'
    ])
        .pipe(minCSS())
        .pipe(concat('slick.min.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('css', async function () {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'app/css/main.css'
    ])
        .pipe(minCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('app/css'));
});

gulp.task('aosCSS', async function(){
   return gulp.src([
       'node_modules/aos/dist/aos.css'
   ])
       .pipe(minCSS())
       .pipe(concat('aos.min.css'))
       .pipe(gulp.dest('app/css'));
});

gulp.task('watch', async function () {
    gulp.watch(['node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/jquery-on-scrolled-to/on-scrolled-to.min.js'], gulp.parallel('jquery+bootstrap'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/main.js', gulp.parallel('mainJS'));
});

gulp.task('default', gulp.parallel('jquery+bootstrap', 'css', 'mainJS', 'browser-sync', 'vivus', 'slickCSS', 'aosCSS',
    'slick', 'aos', 'watch'));