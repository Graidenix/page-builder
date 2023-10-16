
/**
 * Create the shades for main color selected and insert them inside the `colors.css` file
 * @param {import('../types').ColorDefinition} colors 
 * @returns 
 */
const buildColor = (colors = {}) => {
    const {main, secondary} = colors;
    console.log(`Colors:\n - Main: ${main}\n - Secondary: ${secondary}`);
    return {
        main,
        secondary
    }
}

module.exports = {
    buildColor
}
