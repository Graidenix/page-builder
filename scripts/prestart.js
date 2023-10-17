#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const libDir = path.join(__dirname, '../src/lib');

const libTpl = (components) => `import React from "react";
import {ConfigType} from "@/types.ts";
${Object.keys(components).map(type => components[type].map(c => `import ${c} from "@/lib/${type}/${c}.tsx";`).join('\n')).join('\n')}

export const componentsMap: Record<keyof ConfigType["components"], Record<string, React.FC<any>>> = {
    ${Object.keys(components).map(type => `${type}: {${components[type].join(', ')}}`).join(',\n')}
}
`

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

fs.writeFileSync(path.join(libDir, '../componentsLib.json'), JSON.stringify(data, null, 2));
fs.writeFileSync(path.join(libDir, '../componentsLib.ts'), libTpl(data.components))


