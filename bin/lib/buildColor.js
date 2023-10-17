/**
 * Create the shades for main color selected and insert them inside the `colors.css` file
 * @param {import('../../types').ColorDefinition} colors
 * @returns
 */
const buildColor = (colors = {}) => {
    const {main, accent} = colors;
    console.log(`Colors:\n - Main: ${main}\n - Accent: ${accent}`);
    return {
        main,
        accent
    }
}

module.exports = {
    buildColor
}
