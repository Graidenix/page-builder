export type Components = { [type: string]: string };

export type ColorDefinition = {
    main: string,
    accent: string,
};

export type ConfigType = {
    colors: ColorDefinition,
    targetDir: string,
    components: Components;
};

