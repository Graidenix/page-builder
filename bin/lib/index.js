const { readFile } = require('./readFile');
const { parseContents } = require('./parseContents');
const { buildColor } = require('./buildColor');
const { importComponent } = require('./importComponent');
const { checkTargetDir } = require('./checkTargetDir');
const { writeColorCSS } = require('./writeColorCSS');


const buildComponents = (file) => {
    try {
        const configContents = readFile(file);
        const configs = parseContents(configContents);
        const colorCss = buildColor(configs.colors);
        checkTargetDir(configs.targetDir);
        writeColorCSS(colorCss);
        Object.keys(configs.components ?? {}).map(component => {
            importComponent(configs.targetDir, component, configs.components[component])
        })
    } catch (e) {
        switch (e.code) {
            case 'NO_CONFIG_FILE':
            case 'INVALID_JSON':
                console.error(e.message);
                break;
            default:
                console.error('Uncaught Error:', e.code, e);
        }
        return process.exit(1);
    }
}

module.exports = {
    buildComponents,
};
