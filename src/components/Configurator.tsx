import React from "react";
import Input from "@/components/Input.tsx";
import components from '@/components.json'

interface ConfiguratorProps {
    className: string;
    values: any;
    onChange: (key: string, value: string) => unknown;
}

const Configurator: React.FC<ConfiguratorProps> = (props) => {
    const {className, values, onChange} = props;
    console.log(components);

    return (
        <div className={className}>
            <Input type="number" placeholder="Test" sx={{input: ['text-[red]', 'placeholder:text-[blue]']}}/>
        </div>
    )
}

export default Configurator;