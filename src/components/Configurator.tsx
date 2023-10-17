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
    onSubmit: (ev: React.FormEvent<HTMLFormElement>) => unknown;
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
    const {className, values, onChange, onSubmit} = props;
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

    const handleDownload = () => {
        const jsonContent = JSON.stringify(values, null, 2);
        const fileContent = new Blob([jsonContent], { type: 'application/json' });
        const url = window.URL.createObjectURL(fileContent);
        const a = document.createElement('a');
        a.href = url;
        a.download = `components.builds.json`; // You can change the file name if needed
        a.click();
        window.URL.revokeObjectURL(url);
    }

    const handleTargetDir = (ev: ChangeEvent<HTMLInputElement>): void => {
        const targetDir = ev.target.value;
        onChange('targetDir', targetDir);
    }

    return (
        <form className={styles.root(className)} onSubmit={onSubmit}>
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

            <div className="flex flex-row gap-2">
                <button type="submit" className="bg-[#1276e2] text-white rounded py-1 px-3">Generate</button>
                <button type="button" className="bg-[#422451] text-white rounded py-1 px-3" onClick={handleDownload}>Download</button>
            </div>
        </form>
    )
}

export default Configurator;

const styles = mapStyleCn({
    root: 'flex flex-col gap-2'
})
