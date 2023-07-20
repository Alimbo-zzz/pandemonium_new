 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const concat = require('gulp-concat'); // объединяет несколько файлов в один
const cssimport = require('gulp-cssimport'); // позволяет изсользовать @import "src.css";
const autoprefixer = require('gulp-autoprefixer'); // autoprefixer
const csso = require('gulp-csso'); // минифицирует css
const rename = require('gulp-rename'); // изменяет имя файла
const shorthand = require('gulp-shorthand');  // сокращяет написание стилей (padding: 10px 15px;)
const groupCssMediaQueries = require('gulp-group-css-media-queries');  // группирует одинаковые @media
const _if = require('gulp-if'); // условия


// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ CSS _______

const css = () =>{
	return src(path.css.src, {sourcemaps: app.isDev})
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "CSS",
				message: err.message
			}))
		}))
		.pipe(concat('main.css'))
		.pipe(cssimport())
		.pipe(groupCssMediaQueries())
		.pipe(shorthand())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
		.pipe(rename({suffix: '.min'}))
		.pipe(csso())
		.pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
		.pipe(browserSync.stream());
}



module.exports = css;
