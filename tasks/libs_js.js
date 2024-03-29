const plugins = [
  "node_modules/jquery/dist/jquery.js",
  "node_modules/swiper/swiper-bundle.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.bundle.js",
  "node_modules/simplebar/dist/simplebar.min.js",
  // "./src/js-libs/ParsePhone.js",
  "./src/js-libs/LightGallery.js",
  "node_modules/chart.js/dist/chart.umd.js"
];
const { src, dest } = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const chalk = require("chalk");

module.exports = function libs_js(done) {
  if (plugins.length > 0)
    return src(plugins)
      .pipe(uglify())
      .pipe(concat("libs.min.js"))
      .pipe(dest("build/js/"));
  else {
    return done(
      console.log(
        chalk.bgYellow(
          `${chalk.bold("WARNING!")} You did not add any JavaScript plugins.`
        )
      )
    );
  }
};
