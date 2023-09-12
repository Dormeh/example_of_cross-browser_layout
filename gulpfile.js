const gulp = require('gulp');
const autoPrefix = require('autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const gulpIf = require('gulp-if');
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const cssNano = require("cssnano");

const config = {
    path: {
        scss: './components/scss/**/*.scss',
        html: './index.html',
    },
    output: {
        cssName: 'bundle.min.css',
        path: './assets/css'
    },
    isDevelop: false,
};

gulp.task('scss', function () {
    return gulp.src(config.path.scss)
        .pipe(gulpIf(config.isDevelop, sourceMaps.init()))
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        // .pipe(autoPrefix())
        // .pipe(gulpIf(!config.isDevelop, cleanCSS()))
        .pipe(postcss([ autoPrefix(), cssNano() ]))
        // .pipe(gulpIf(!config.isDevelop, cleanCSS()))
        .pipe(gulpIf(config.isDevelop, sourceMaps.write()))
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(config.path.scss, gulp.series('scss'));
    gulp.watch(config.path.html).on('change', browserSync.reload)
})

gulp.task('default', gulp.series(['scss', 'serve']));
