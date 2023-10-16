const { deepMerge } = require("./deepMerge");

/**
 * @type {import('../types').ConfigType}
 */
const DEFAULT_CONFIG = {
    colors: {
        main: '#3e63dd',
        secondary: '#ddb83e'
    },
    targetDir: './src/shared',
    components: {
        NavBar: 'NavBar1'
    }
}

/**
 * @param {string} contents
 * @return {import('../types').ConfigType}
 */
const parseContents = (contents) => {
    try {
        const parsed = JSON.parse(contents);
        return deepMerge(DEFAULT_CONFIG, parsed)
    } catch (jsonError) {
        throw { message: `Config has invalid JSON format`, code: 'INVALID_JSON' }
    }
}

module.exports = {
    parseContents
}
