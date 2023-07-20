const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const rm = require( 'gulp-rm' );         /*удаление*/
const newer = require('gulp-newer'); // не трогает старые файлы при добавлении новых


// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ RESOURCES _______

const resources = () =>{
	return src(path.resources.src)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "RESOURCES",
				message: err.message
			}))
		}))
    .pipe(newer(path.resources.dest))
		.pipe(dest(path.resources.dest))
		.pipe(browserSync.stream());
}



module.exports = resources;
