module.exports = {
  syntax: 'postcss-scss',
  map: {
    inline: true
  },
  plugins: [
    require('@csstools/postcss-sass'),
    require("postcss-nested"),
    require("postcss-import"),
    require("postcss-url"), //помогло!!! пути изменились на корректные
    // require("postcss-fontpath"),// не помогло проблема с путями шрифтов установленных на диске осталась
    require("postcss-advanced-variables"),
    require("postcss-mixins"),
    require('autoprefixer'),
    require("cssnano") ,
  ]
};
