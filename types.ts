import {RxColorName} from "@/helper/colors.ts";

export type Components = { [type: string]: string };

export type ColorDefinition = {
    main: RxColorName,
    accent: RxColorName,
};

export type ConfigType = {
    colors: ColorDefinition,
    targetDir: string,
    components: Components;
};

