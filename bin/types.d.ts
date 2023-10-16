export interface ConfigType {
    colors: {
        main: string,
        secondary: string,
    },
    targetDir: string,
    components: { [type: string]: string };
}
