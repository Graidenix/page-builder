#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const packageData = require('../package.json');
const { readFile, parseContents, buildColor, importComponent, checkTargetDir } = require("./lib");


const buildComponents = (file) => {
    try {
        const configContents = readFile(file);
        const configs = parseContents(configContents);
        const colors = buildColor(configs.colors);
        checkTargetDir(configs.targetDir)
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

yargs(hideBin(process.argv))
    .version(packageData.version)
    .command(
        'components [file]',
        'import the components from library according to file',
        (y) => y.positional('file', {
            describe: 'JSON file with desired components',
            default: './components.builds.json'
        }),
        (argv) => buildComponents(argv.file))
    .parse()

