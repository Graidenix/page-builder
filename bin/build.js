#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const packageData = require('../package.json');
const { buildComponents } = require("./lib");

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

