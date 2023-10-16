const {readFile} = require('./readFile');
const {parseContents} = require('./parseContents');
const {buildColor} = require('./buildColor');
const {importComponent} = require('./importComponent');
const {checkTargetDir} = require('./checkTargetDir');

module.exports = {
    readFile,
    parseContents,
    buildColor,
    importComponent,
    checkTargetDir,
}
