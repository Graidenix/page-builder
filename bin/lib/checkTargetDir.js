const fs = require("fs");

/**
 * Check it target directory exist, otherwise create it
 * @param {string} targetDir 
 */
const checkTargetDir = (targetDir) => {
    if (fs.existsSync(targetDir)) return;
    console.info(`Creating target directory (${targetDir}), because it does not exist.`)
    fs.mkdirSync(targetDir, { recursive: true });
}

module.exports = {
    checkTargetDir
}
