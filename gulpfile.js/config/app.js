const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
	isProd: isProd,
	isDev: isDev,

	html:{
		htmlmin:{
			collapseWhitespace: isProd,
		},

	},
	pug:{
		langPug: {
			pretty: isDev, // значение false - минифицирует pug на выходе
		},

	}
}
