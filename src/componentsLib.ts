import React from "react";
import {ConfigType} from "@/types.ts";
import Footer1 from "@/lib/Footer/Footer1.tsx";
import Footer2 from "@/lib/Footer/Footer2.tsx";
import NoFooter from "@/lib/Footer/NoFooter.tsx";
import NavBar1 from "@/lib/NavBar/NavBar1.tsx";
import NavBar2 from "@/lib/NavBar/NavBar2.tsx";
import NoNav from "@/lib/NavBar/NoNav.tsx";

export const componentsMap: Record<keyof ConfigType["components"], Record<string, React.FC<any>>> = {
    Footer: {Footer1, Footer2, NoFooter},
NavBar: {NavBar1, NavBar2, NoNav}
}
