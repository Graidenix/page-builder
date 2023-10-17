import colorJs from 'color-js';
import * as rxColors from '@radix-ui/colors'
import {ConfigType} from "../../types.ts";
import React from "react";

export type RxColorName = keyof typeof rxColors;

const isColorName = (colorName: string): colorName is RxColorName => !colorName.includes('A') && !colorName.includes('Dark') && !colorName.includes('P3')

export const LIST_OF_COLORS: RxColorName[] = Object.keys(rxColors).filter(isColorName);

export const getColorSchema = (colorName: RxColorName, colorType: keyof ConfigType["colors"]): React.CSSProperties => {
    const schema: React.CSSProperties = {}
    const schemaA: React.CSSProperties = {}

    Array(12).fill(null).map((_, i) => {
        // @ts-ignore
        schema[`--${colorType}-${i + 1}`] = `${rxColors[colorName][colorName + (i + 1)]}`;
        // @ts-ignore
        schemaA[`--${colorType}-a${i + 1}`] = `${rxColors[colorName + 'A'][colorName + 'A' + (i + 1)]}`;
    });

    return {...schema, ...schemaA};
}

// https://www.npmjs.com/package/color-js

export const getComplementaryColor = (mainColor: string): string => {
    const [, color2] = colorJs(mainColor).complementaryScheme()
    return color2 ? color2.toCSS().toLowerCase() : mainColor;
}

export const getColorVariables = (color: string) => {
    const colorObj = colorJs(color);
    const schema = colorObj.clashScheme().map(c => c.toCSS().toLowerCase());
    console.log(schema)
}
