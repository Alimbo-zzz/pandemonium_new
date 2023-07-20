 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const rename = require('gulp-rename'); // изменяет имя файла
const concat = require('gulp-concat'); // объединяет несколько файлов в один
const babel = require('gulp-babel'); // поддержка ES6 и выше
const uglify = require('gulp-uglify'); //минифицирует js

// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ JavaScript _______

const js = () =>{
	return src(path.js.src, {sourcemaps: app.isDev})
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "JavaScript",
				message: err.message
			}))
		}))
    .pipe(babel())
    .pipe(concat('main.js', {newLine: ";"}))
    .pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
		.pipe(rename({suffix: '.min'}))
    .pipe(uglify())
		.pipe(dest(path.js.dest, {sourcemaps: app.isDev}))
		.pipe(browserSync.stream());
}



module.exports = js;
