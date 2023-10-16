const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../../src/lib');

const importComponent = (targetDir, type, selected) => {
    try {
        fs.copyFileSync(path.join(COMPONENTS_DIR, type, selected + '.tsx'), path.join(targetDir, type + '.tsx'));
    } catch (e) {
        console.error('COPY ERROR', e);
        throw { message: `Cannot find source component ${type}/${selected}.tsx`, code: 'NO_SRC_COMPONENT' }
    }
}

module.exports = {
    importComponent
}
