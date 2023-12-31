const { deepMerge } = require("./deepMerge");

/**
 * @type {import('../../types').ConfigType}
 */
const DEFAULT_CONFIG = {
    colors: {
        main: 'blue',
        accent: 'bronze'
    },
    targetDir: './src/shared',
    components: {
        NavBar: 'NavBar1'
    }
}

/**
 * @param {string} contents
 * @return {import('../../types').ConfigType}
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
