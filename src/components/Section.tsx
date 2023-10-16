import { mapStyleCn } from "@/helper/styles";
import { SxProp } from "@/typings";
import React from "react";

export type SectionProps = {
    header: React.ReactNode;
    htmlFor?: string;
    sx?: SxProp<typeof styles>;
} & React.PropsWithChildren;

const Section: React.FC<SectionProps> = (props) => {
    const { sx = {}, header, htmlFor, children } = props;

    return (<div className={styles.root(sx.root)}>
        <label htmlFor={htmlFor} className={styles.header(sx.header)}>{header}</label>
        {children}
    </div>)

}

export default Section;

const styles = mapStyleCn({
    root: 'flex flex-col gap-1',
    header: 'uppercase text-xxs'
})