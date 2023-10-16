const fs = require("fs");

const readFile = (file) => {
    try {
        return fs.readFileSync(file, { encoding: "utf-8", flag: 'r' });
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw { message: `File ${file} does not exist`, code: 'NO_CONFIG_FILE' }
        }
        throw error
    }
}

module.exports = {
    readFile
}
