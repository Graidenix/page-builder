
/**
 * Check if passed argument is Object type
 * 
 * @param {*} item 
 * @returns {boolean}
 */
const isObject = (item) => item && typeof item === 'object';

/**
 * Deep merge properties of the object
 * 
 * @param {*} target 
 * @param {*} source 
 * @returns {*}
 */
const deepMerge = (target, source) => {
    if (!isObject(target) || !isObject(source)) return source;

    if (Array.isArray(target) && Array.isArray(source)) {
        return Array.from(new Set([...target, ...source]));
    }

    return Object.keys(source).reduce(
        (acc, key) => {
            if (!isObject(source[key])) {
                acc[key] = source[key];
                return acc;
            }

            if (key in target) {
                acc[key] = deepMerge(target[key], source[key]);
            } else {
                acc[key] = { ...source[key] };
            }
            return acc;
        },
        { ...target },
    );
};

module.exports = {
    deepMerge,
    isObject
}
