const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const pug = require("gulp-pug");

// Pug

const pugTemplate = () => {
  return src("app/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(dest("app"))
    .pipe(browserSync.reload({ stream: true }));
};

// SCSS

const styles = () => {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
};

// JavaScript

const scripts = () => {
  return src(["app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
};

// Image optimization

const images = () => {
  return src("app/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
};

// Browser reloader

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
};

exports.styles = styles;

// Build

const build = () => {
  return src(
    [
      "app/*html",
      "app/css/style.min.css",
      "app/js/main.min.js",
      "app/fonts/**/*.*",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
};

// Clean Dist

const cleanDist = () => {
  return del("dist");
};

// Watch

const watching = () => {
  watch(["app/pug/**/*.pug"], pugTemplate);
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js"], scripts);
};

exports.default = parallel(scripts, pugTemplate, styles, browsersync, watching);
exports.build = series(cleanDist, build);
exports.images = series(images);
