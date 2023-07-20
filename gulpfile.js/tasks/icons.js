 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const newer = require('gulp-newer'); // не трогает старые файлы при добавлении новых
const _if = require('gulp-if'); // условия
const svgo = require('gulp-svgo');  /* позволяет менять настройки svg */
const svgSprite = require('gulp-svg-sprite');    /*svg спрайты*/

// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ IMG _______

const icons = () =>{
	return src(path.icons.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "ICONS",
				message: err.message
			}))
		}))
    .pipe(newer(path.icons.dest))
    .pipe(svgo({
      plugins:[{removeAttrs:{ attrs: "(width|height)"}}]
    }))
    .pipe(svgSprite({
      mode:{ symbol:{ sprite: "../sprite.svg"} }
    }))
		.pipe(dest(path.icons.dest))
		.pipe(browserSync.stream());
}



module.exports = icons;
