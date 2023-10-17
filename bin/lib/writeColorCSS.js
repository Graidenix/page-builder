
const fs = require('fs');
const writeColorCSS = (cssContents) => {
    fs.writeFileSync('./colors.css', cssContents, {encoding: 'utf-8'});
}

module.exports = {
    writeColorCSS
}
