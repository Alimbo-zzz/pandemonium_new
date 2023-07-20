const { src, dest } = require('gulp');
const fs = require('fs');

// config
const path = require('../config/path.js');
const app = require('../config/app.js');



const cb = () => {}

let srcFonts = `${path.src}/styles/files/fonts.scss`;
let appFonts = `${path.fonts.dest}`;

const fonts_css = (done) => {
  let file_content = fs.readFileSync(srcFonts);

  fs.writeFile(srcFonts, '', cb);
  fs.readdir(appFonts, function (err, items) {
    if (items) {
      let c_fontname;
      for (var i = 0; i < items.length; i++) {
        let fontname = items[i].split('.');
        fontname = fontname[0];
        if (c_fontname != fontname) {
          fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", 400);\r\n', cb);
        }
        c_fontname = fontname;
      }
    }
  })

  done();
}

module.exports = fonts_css;
