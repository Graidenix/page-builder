import React from "react";
import {RxColorName} from "@/helper/colors.ts";

export type ComponentTypeName = 'NavBar' | 'Footer';

export type BuilderComponentsProps = Record<ComponentTypeName, React.FC<any>>

export type ColorDefinition = {
    main: RxColorName,
    accent: RxColorName,
};

export type ConfigType = {
    colors: ColorDefinition,
    targetDir: string,
    components: Record<ComponentTypeName, string>;
};



