import React from "react";
import Input from "@/components/Input.tsx";
import components from '@/components.json'
import Section from "./Section";
import { mapStyleCn } from "@/helper/styles";

export type ConfiguratorProps = {
    className: string;
    values: any;
    onChange: (key: string, value: string) => unknown;
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
    const {className} = props;
    console.log(components);

    const handleComplementary = () => {
        console.log('Complementary Color')
    }

    return (
        <div className={styles.root(className)}>
            <Section header="Main Color" htmlFor="mainColor">
                <Input type="color" placeholder="Main color" id="mainColor" onChange={() => {}}/>
            </Section>

            <Section header="Accent Color" htmlFor="accentColor">
                <Input type="color" placeholder="Accent color" id="accentColor" onChange={() => {}}/>
                <button onClick={handleComplementary}>Use complementary</button>
            </Section>
        </div>
    )
}

export default Configurator;

const styles = mapStyleCn({
    root: 'flex flex-col gap-2'
})
