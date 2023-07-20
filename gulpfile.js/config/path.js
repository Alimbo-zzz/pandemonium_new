
// ___________ vars ____________
const pathSrc = './src';
const pathDest = './dist';

const html = [
	`${pathSrc}/html/main.html`,
	`${pathSrc}/html/pages/*.html`,
]

const pug = [
	`${pathSrc}/index.pug`
]

const css = [
	`${pathSrc}/css/blocks/**/*.css`,
	`${pathSrc}/css/base.css`,
]

const scss = [
	`${pathSrc}/styles/files/normalize.css`,
	`${pathSrc}/styles/main.scss`,
]

const js = [
	`${pathSrc}/scripts/**/*.js`,
]

const img = [
	`${pathSrc}/assets/images/**/*.{png,jpg,jpeg,gif,svg}`,
]

const svg = [
	`${pathSrc}/assets/icons/svg/**/*.svg`,
]

const icons = [
	`${pathSrc}/assets/icons/ico/**/*.svg`,
]

const fonts = [
	`${pathSrc}/assets/fonts/**/*.{ttf,otf,woff,woff2}`,
]

const resources = [
	`${pathSrc}/resources/**/*`,
]

const plugins = [
	`${pathSrc}/plugins/**/*`,
]




// _______ exports _______
module.exports = {
	root: pathDest,
	src: pathSrc,

	html:{
		src: html,
		watch: pathSrc + "/html/**/*.html",
		dest: pathDest
	},

	pug:{
		src: pug,
		watch: pathSrc + "/pug/**/*.pug",
		dest: pathDest
	},

	css:{
		src: css,
		watch: pathSrc + "/styles/**/*.css",
		dest: pathDest + '/css'
	},

	scss:{
		src: scss,
		watch: pathSrc + "/styles/**/*.scss",
		dest: pathDest + '/css'
	},

	js:{
		src: js,
		watch: pathSrc + "/scripts/**/*.js",
		dest: pathDest + '/js'
	},

	img:{
		src: img,
		watch: img,
		dest: pathDest + '/assets/images'
	},

	fonts:{
		src: fonts,
		watch: fonts,
		dest: pathDest + '/assets/fonts'
	},

	svg:{
		src: svg,
		watch: svg,
		dest: pathDest + '/assets/icons/svg'
	},

	icons:{
		src: icons,
		watch: icons,
		dest: pathDest + '/assets/icons/ico'
	},

	resources:{
		src: resources,
		watch: resources,
		dest: pathDest + '/resources'
	},

	plugins:{
		src: plugins,
		watch: plugins,
		dest: pathDest + '/plugins'
	},

}
