#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const libDir = path.join(__dirname, '../src/lib')

const componentTypes = fs.readdirSync(libDir);
const components = componentTypes
    .filter(item => !item.includes('.'))
    .map(type => {
        const files = fs
            .readdirSync(path.join(libDir, type))
            .filter((file) => file.includes('.tsx'))
            .map(file => file.replace('.tsx', ''));
        return [type, files];
    })
    .reduce((acc, [key, props]) => {
        acc[key] = props;
        return acc;
    }, {});

console.log('Rebuilt the components JSON - DONE!');

const data = {
    components
}

fs.writeFileSync(path.join(libDir, '../components.json'), JSON.stringify(data, null, 2));
