// Paths
//
var build = "_site";

module.exports = {
  browsers: ["> 2%", "Last 2 versions", "IE 11"],
  // BrowserSync
  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 4000,
      notify: false
    }
  },

  // Watch source files
  watch: {
    jekyll: [
      "_config.yml",
      "_includes/*.html",
      "assets/img/png,jpg,svg,}",
      "_layouts/*.html",
      "pages/**/*.{html,markdown,md,yml,json,txt,xml}"
    ],
    styles: ["_scss/*.scss", "_scss/components/*.scss", "_scss/layouts/*.scss"]
  },

  jekyll: {
    development: {
      config: "_config.yml,_config-dev.yml"
    }
  }
};
