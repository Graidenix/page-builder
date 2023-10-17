const rxColors = require('@radix-ui/colors');

const buildSchema = (colorName, colorType) => {
    const schema = {};
    const schemaA = {};

    Array(12).fill(null).map((_, i) => {
        // @ts-ignore
        schema[`--${colorType}-${i + 1}`] = `${rxColors[colorName][colorName + (i + 1)]}`;
        // @ts-ignore
        schemaA[`--${colorType}-a${i + 1}`] = `${rxColors[colorName + 'A'][colorName + 'A' + (i + 1)]}`;
    });

    return {...schema, ...schemaA};
}

/**
 * Create the shades for main color selected and insert them inside the `colors.css` file
 * @param {import('../../types').ColorDefinition} colors
 * @returns
 */
const buildColor = (colors = {}) => {
    const {main, accent} = colors;
    console.log(`Colors:\n - Main: ${main}\n - Accent: ${accent}`);

    const mainSchema = buildSchema(main, 'main');
    const accentSchema = buildSchema(accent, 'accent');

    return `:root {
    ${Object.keys(mainSchema).map(variable => `--${variable}: ${mainSchema[variable]};`).join('\n    ')}
    
    ${Object.keys(accentSchema).map(variable => `--${variable}: ${accentSchema[variable]};`).join('\n    ')}
}`;
}

module.exports = {
    buildColor
}
