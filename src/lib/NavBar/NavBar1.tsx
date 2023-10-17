import React from "react";

export interface NavBarProps {
    logo: React.ReactNode;
    links: { name: string; href: string; }[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { logo, links } = props;
    return (
        <div className="flex justify-between items-center md:gap-x-12">
            <a aria-label="Home" href="#" className="text-main-10">{logo}</a>
            <div className="hidden md:flex md:gap-x-6">
                {links.map(link => (
                    <a key={link.name} className="inline-block px-2 py-1 text-sm text-main-10" href={link.href}>{link.name}</a>
                ))}
            </div>
        </div>
    )
}

export default NavBar
