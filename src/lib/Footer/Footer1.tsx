import React from "react";

export interface FooterProps {
    sections: {
        name: string;
        links: { name: string; href: string; }[]
    }[];
}

const Footer: React.FC<FooterProps> = (props) => {
    const { sections } = props;
    return <footer className="bg-main-10 p-6 text-white">
        <div className="flex flex-row justify-between mb-8 mx-12">
            {sections.map(section => (
                <div className="flex flex-col gap-2" key={section.name}>
                    <h4 className="text-lg font-bold">{section.name}</h4>
                    {section.links.map(link => (
                        <a className="text-sm underline" href={link.href}>{link.name}</a>
                    ))}
                </div>
            ))}
        </div>
        <div className="text-center text-xs">Copyright &copy; 2023</div>
    </footer>;
}

export default Footer
