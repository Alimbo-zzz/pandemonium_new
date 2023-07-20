const { src, dest} = require('gulp');

// plugins
const fileInclude = require('gulp-file-include'); // (html) @@include('src'), @@loop('html-src', 'json-src')
const htmlmin = require('gulp-htmlmin'); // сжатие html
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const rename = require('gulp-rename'); // изменяет имя файла


// config
const path = require('../config/path.js');
const app = require('../config/app.js');

// _______ HTML _______

const html = () =>{
	return src(path.html.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "HTML",
				message: err.message
			}))
		}))
		.pipe(fileInclude())
		.pipe(htmlmin(app.html.htmlmin))
		.pipe(rename('index.html'))
		.pipe(dest(path.html.dest))
		.pipe(browserSync.stream());
}



module.exports = html;
