import React, {useState} from "react";
import {mapStyles} from "@/helper/styles.ts";

export type PreviewProp = {
    className: string;
    values: any;
}

const pages = ['landing', 'product-list', 'product-details'] as const;

type SitePage = (typeof pages)[number];

const Preview: React.FC<PreviewProp> = (props) => {
    const {className} = props;
    const [page, setPage] = useState<SitePage>('landing')


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
            Preview
        </div>
    </div>)
}

export default Preview;

const styles = mapStyles({
    topbar: 'p-2 border-b flex justify-between items-center',
    main: 'p-2'
})

