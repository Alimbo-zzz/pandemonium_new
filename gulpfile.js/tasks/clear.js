const del = require('del');  // позволяет удалять директории

// config
const path = require('../config/path.js');

// _______ dirClear ________

const clear = ()=> {
	return del(path.root)
}


module.exports = clear;
