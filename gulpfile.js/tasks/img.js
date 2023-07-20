 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const imagemin = require('gulp-imagemin'); // сжатие изображений
const newer = require('gulp-newer'); // не трогает старые файлы при добавлении новых
const _if = require('gulp-if'); // условия

// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ IMG _______

const img = () =>{
	return src(path.img.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "IMG",
				message: err.message
			}))
		}))
    .pipe(newer(path.img.dest))
		.pipe(dest(path.img.dest))
		.pipe(browserSync.stream());
}



module.exports = img;
