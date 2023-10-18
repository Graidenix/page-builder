import React, {lazy} from "react";
import {BuilderComponentsFC, ConfigType} from "@/types.ts";

const Button1 = lazy(() => import("@/lib/Button/Button1.tsx"));
const Button2 = lazy(() => import("@/lib/Button/Button2.tsx"));
const Button3 = lazy(() => import("@/lib/Button/Button3.tsx"));
const Footer1 = lazy(() => import("@/lib/Footer/Footer1.tsx"));
const Footer2 = lazy(() => import("@/lib/Footer/Footer2.tsx"));
const NoFooter = lazy(() => import("@/lib/Footer/NoFooter.tsx"));
const NavBar1 = lazy(() => import("@/lib/NavBar/NavBar1.tsx"));
const NavBar2 = lazy(() => import("@/lib/NavBar/NavBar2.tsx"));
const NavBar3 = lazy(() => import("@/lib/NavBar/NavBar3.tsx"));
const NoNav = lazy(() => import("@/lib/NavBar/NoNav.tsx"));
import {objKeys} from "@/type-helper.ts";

export const componentsMap: Record<keyof ConfigType["components"], Record<string, React.FC<any>>> = {
    Button: {Button1, Button2, Button3},
    Footer: {Footer1, Footer2, NoFooter},
    NavBar: {NavBar1, NavBar2, NavBar3, NoNav}
}

export const defaultComponents = objKeys(componentsMap ?? {}).reduce((acc, componentName) => {
    acc[componentName] = Object.values(componentsMap[componentName])[0]!
    return acc;
}, {} as BuilderComponentsFC);

console.log(defaultComponents);

window.selectedComponents = window.selectedComponents ?? defaultComponents;
export default componentsMap;
