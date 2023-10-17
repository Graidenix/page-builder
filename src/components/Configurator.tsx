import React, {ChangeEvent} from "react";
import Input from "@/components/Input.tsx";
import Section from "./Section";
import {mapStyleCn} from "@/helper/styles";
import {LIST_OF_COLORS} from "@/helper/colors.ts";
import {ComponentTypeName, ConfigType} from "@/types.ts";
import componentData from '@/componentsLib.json'

const components = componentData.components as Record<ComponentTypeName, string[]>;
const availableTypes = Object.keys(components) as ComponentTypeName[];

export type ConfiguratorProps = {
    className: string;
    values: ConfigType;
    onChange: <Key extends keyof ConfigType = keyof ConfigType>(key: Key, value: ConfigType[Key]) => unknown;
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
    const {className, values, onChange} = props;
    // console.log(components);

    const handleColorChange = (colorType: keyof ConfigType['colors']) => (ev: ChangeEvent<HTMLSelectElement>): void => {
        const color = ev.target.value;
        onChange('colors', {
            ...values.colors,
            [colorType]: color
        })
    };

    const handleComponentChange = (componentName: keyof ConfigType['components']) => (ev: ChangeEvent<HTMLSelectElement>): void => {
        const selectedComponent = ev.target.value;
        onChange('components', {
            ...values.components,
            [componentName]: selectedComponent
        })
    }

    const handleTargetDir = (ev: ChangeEvent<HTMLInputElement>): void => {
        const targetDir = ev.target.value;
        onChange('targetDir', targetDir);
    }

    return (
        <div className={styles.root(className)}>
            <Section header="Target directory" htmlFor="targetDir">
                <Input type="text" placeholder="Place where to copy components" value={values.targetDir}
                       onChange={handleTargetDir}/>
            </Section>

            <Section header="Main Color" htmlFor="mainColor">
                <select className="capitalize" placeholder="Main color" id="mainColor" value={values.colors.main}
                        onChange={handleColorChange('main')}>
                    {LIST_OF_COLORS.map(color => (<option key={color} value={color}>{color}</option>))}
                </select>
            </Section>

            <Section header="Accent Color" htmlFor="accentColor">
                <select className="capitalize" placeholder="Accent color" id="accentColor" value={values.colors.accent}
                        onChange={handleColorChange('accent')}>
                    {LIST_OF_COLORS.map(color => (<option key={color} value={color}>{color}</option>))}
                </select>
            </Section>

            {availableTypes.map((componentName) => (
                <Section header={componentName} key={componentName} htmlFor={componentName + 'Id'}>
                    <select
                        className="capitalize"
                        id={componentName + 'Id'}
                        value={values.components[componentName]}
                        onChange={handleComponentChange(componentName)}
                    >
                        {components[componentName].map((variation: string) => (
                            <option key={variation} value={variation}>{variation}</option>
                        ))}
                    </select>
                </Section>
            ))}
        </div>
    )
}

export default Configurator;

const styles = mapStyleCn({
    root: 'flex flex-col gap-2'
})
