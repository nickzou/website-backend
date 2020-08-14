const mix = require('laravel-mix');

require('laravel-mix-polyfill');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

 let theme = process.env.MIX_THEME_NAME;
 let public = 'public/wp-content';
 let virtualHost = `https://${process.env.MIX_SITE_URL}`;

mix.js(`src/js/app.js`, `${public}/themes/${theme}/js/app.js`)
.options({
    processCssUrls: false
})
.sass(`src/scss/styles.scss`, `${public}/themes/${theme}/css/styles.css`)
.sourceMaps(true, 'inline-source-map')
.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: {"firefox": "50", "ie": 11}
 })
 .browserSync({
    proxy: virtualHost,
    files: [`${public}/themes/${theme}/**`]
});