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
