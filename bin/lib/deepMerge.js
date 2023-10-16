const isObject = (item) => item && typeof item === 'object';
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
