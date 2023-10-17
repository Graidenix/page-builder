import React, {useMemo, useState} from "react";
import {cn, mapStyles} from "@/helper/styles.ts";
import LandingPage from "@/pages/LandingPage";
import ProductListPage from "@/pages/ProductListPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ContactUsPage from "@/pages/ContactUsPage";
import {getColorSchema} from "@/helper/colors.ts";
import {BuilderComponentsFC, ConfigType} from "@/types.ts";
import {componentsMap} from "@/componentsLib.ts";
import { objKeys } from "@/type-helper";

export type PreviewProp = {
    className: string;
    values: ConfigType;
}

const pages = ['LandingPage', 'ProductListPage', 'ProductDetailsPage', 'ContactUsPage'] as const;

type SitePage = (typeof pages)[number];

const pageMap: Record<SitePage, React.FC<BuilderComponentsFC>> = {
    LandingPage,
    ProductListPage,
    ProductDetailsPage,
    ContactUsPage,
};

const Preview: React.FC<PreviewProp> = (props) => {
    const {className, values} = props;
    const [page, setPage] = useState<SitePage>('LandingPage')

    const Page = pageMap[page]

    const colorVariables = useMemo(() => {
        const mainSchema = getColorSchema(values.colors.main, 'main');
        const accentSchema = getColorSchema(values.colors.accent, 'accent');
        return {...mainSchema, ...accentSchema} as React.CSSProperties;
    }, [values.colors]);

    const componentsProps = useMemo(() => {
        const config = objKeys(values.components)

        return config.reduce((acc, componentName) => {
            const variations = componentsMap[componentName];
            acc[componentName] = variations[values.components[componentName]]!;
            return acc;
        }, {} as BuilderComponentsFC)
    }, [values.components]);


    return (<div className={className}>
        <div className={styles.topbar}>
            <div>
                Select Page
            </div>
            <select value={page} onChange={ev => setPage(ev.target.value as SitePage)}>
                {pages.map(p => (
                    <option value={p} key={p}>{p}</option>
                ))}
            </select>
        </div>
        <div className={cn(styles.main)} style={colorVariables}>
            <Page {...componentsProps}/>
        </div>
    </div>)
}

export default Preview;

const styles = mapStyles({
    topbar: 'p-2 border-b flex justify-between items-center',
    main: 'p-2'
})

