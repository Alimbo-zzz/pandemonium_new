 const { src, dest } = require('gulp');

// plugins
const plumber = require('gulp-plumber'); // отслеживает ошибки
const notify = require('gulp-notify'); // способ вывода ошибки (модальное окно windows)
const size = require('gulp-size');  // выводит в консоль размер файла
const browserSync = require('browser-sync'); // server
const autoprefixer = require('gulp-autoprefixer'); // autoprefixer
const csso = require('gulp-csso'); // минифицирует css
const rename = require('gulp-rename'); // изменяет имя файла
const shorthand = require('gulp-shorthand');  // сокращяет написание стилей (padding: 10px 15px;)
const groupCssMediaQueries = require('gulp-group-css-media-queries');  // группирует одинаковые @media
const sass = require('gulp-sass')(require('sass')); // sass
const concat = require('gulp-concat'); // объединяет несколько файлов в один
const sassGlob = require('gulp-sass-glob');  /*импорт всех стилей в меин одной строчкой (@import "./blocks/*.scss";)*/
const _if = require('gulp-if'); // условия



// config
const path = require('../config/path.js');
const app = require('../config/app.js');


// _______ CSS _______

const scss = () =>{
	return src(path.scss.src, {sourcemaps: app.isDev})
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "SCSS",
				message: err.message
			}))
		}))
    .pipe(sassGlob())
		.pipe(sass())
		.pipe(groupCssMediaQueries())
		.pipe(shorthand())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(concat('main.css'))
    .pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
		.pipe(rename({suffix: '.min'}))
		.pipe(csso())
		.pipe(dest(path.scss.dest, {sourcemaps: app.isDev}))
		.pipe(browserSync.stream());
}



module.exports = scss;
