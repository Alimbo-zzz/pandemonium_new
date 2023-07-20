const { watch, series, parallel } = require('gulp');


// plugins
const browserSync = require('browser-sync'); // server

// config
const path = require('./config/path.js')
const app = require('./config/app.js');

// __________ server ____________

const server = ()=>{
	browserSync.init({
		server:{
			baseDir: path.root,
		}
	})
}



// ___________ tasks ______________

const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
const pug = require('./tasks/pug.js');
const css = require('./tasks/css.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');
const fonts = require('./tasks/fonts.js');
const svg = require('./tasks/svg.js');
const icons = require('./tasks/icons.js');
const resources = require('./tasks/resources.js');
const plugins = require('./tasks/plugins.js');
const fonts_css = require('./tasks/fonts_css.js');



// ______ watcher ________

const watcher = ()=>{
	watch(path.html.watch, html) //.on('all', browserSync.reload)
	watch(path.pug.watch, pug)
	watch(path.css.watch, css)
	watch(path.scss.watch, scss)
	watch(path.js.watch, js)
	watch(path.img.watch, img)
	watch(path.fonts.watch, fonts)
	watch(path.svg.watch, svg)
	watch(path.resources.watch, resources)
	watch(path.plugins.watch, plugins)

}



// _____ exports ______

const dev = series(
	clear,
	parallel(pug, scss, js, img, resources,  series(fonts, fonts_css), svg, icons),
	parallel(watcher, server)
)


const build = series(
	clear,
	parallel(pug, scss, js, img, resources, series(fonts, fonts_css), svg, icons)
)


// _______________
exports.default = app.isProd ? build : dev;
