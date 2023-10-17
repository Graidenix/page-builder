import React from "react";

export interface FooterProps {
    sections: {
        name: string;
        links: { name: string; href: string; }[]
    }[];
}

const Footer: React.FC<FooterProps> = (props) => {
    const {sections} = props;
    return <footer className="bg-black p-6 text-white rounded-t-3xl">
        <div className="flex flex-row gap-16 mb-8">
            {sections.map(section => (
                <div className="flex flex-col gap-2" key={section.name}>
                    <h4 className="text-base font-semibold uppercase">{section.name}</h4>
                    {section.links.map(link => (
                        <a className="text-xs" href={link.href}>{link.name}</a>
                    ))}
                </div>
            ))}
        </div>
        <div className="text-left text-xs">Copyright &copy; 2023</div>
    </footer>;
}

export default Footer
