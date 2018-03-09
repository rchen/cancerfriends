let mix = require('laravel-mix');

mix.less('src/app.less', 'dist')
   .js('src/app.js', 'dist');

mix.autoload({
    'jquery': ['jQuery', '$'],
})
