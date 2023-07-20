 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const newer = require('gulp-newer'); // не трогает старые файлы при добавлении новых
const fonter = require('gulp-fonter');


// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ FONTS _______

const fonts = () =>{
	return src(path.fonts.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "FONTS",
				message: err.message
			}))
		}))
    .pipe(newer(path.fonts.dest))
    .pipe(fonter({formats:['woff']}))
		.pipe(dest(path.fonts.dest))
		.pipe(browserSync.stream());
}



module.exports = fonts;
