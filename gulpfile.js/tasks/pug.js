const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const langPug = require('gulp-pug'); // pug
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const rename = require('gulp-rename'); // изменяет имя файла


// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ PUG _______

const pug = () =>{
	return src(path.pug.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "PUG",
				message: err.message
			}))
		}))
		.pipe(langPug(app.pug.langPug))
		.pipe(rename('index.html'))
		.pipe(dest(path.pug.dest))
		.pipe(browserSync.stream());
}



module.exports = pug;
