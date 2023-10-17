import React from "react";
import type {RxColorName} from "@/helper/colors.ts";

import type { NavBarProps } from "./lib/NavBar/NoNav";
import type { FooterProps } from "./lib/Footer/NoFooter";



export type BuilderComponentsProps = {
    NavBar: NavBarProps;
    Footer: FooterProps;
}

export type ComponentTypeName = keyof BuilderComponentsProps;

export type BuilderComponentsFC= {
    [Component in keyof BuilderComponentsProps]: React.FC<BuilderComponentsProps[Component]>
}

export type ColorDefinition = {
    main: RxColorName,
    accent: RxColorName,
};

export type ConfigType = {
    colors: ColorDefinition,
    targetDir: string,
    components: Record<ComponentTypeName, string>;
};


