export type Components = { [type: string]: string };

export type ColorDefinition = {
    main: string,
    secondary: string,
};

export type ConfigType = {
    colors: ColorDefinition,
    targetDir: string,
    components: Components;
};
