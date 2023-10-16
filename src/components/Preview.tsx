import React, { useState } from "react";
import { mapStyles } from "@/helper/styles.ts";
import LandingPage from "@/pages/LandingPage";
import ProductListPage from "@/pages/ProductListPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ContactUsPage from "@/pages/ContactUsPage";

export type PreviewProp = {
    className: string;
    values: any;
}

const pages = ['LandingPage', 'ProductListPage', 'ProductDetailsPage', 'ContactUsPage'] as const;

type SitePage = (typeof pages)[number];

const pageMap: Record<SitePage, React.FC> = {
    LandingPage,
    ProductListPage,
    ProductDetailsPage,
    ContactUsPage,
};

const Preview: React.FC<PreviewProp> = (props) => {
    const { className } = props;
    const [page, setPage] = useState<SitePage>('LandingPage')

    const Page = pageMap[page]

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
        <div className={styles.main}>
            <Page />
        </div>
    </div>)
}

export default Preview;

const styles = mapStyles({
    topbar: 'p-2 border-b flex justify-between items-center',
    main: 'p-2'
})

