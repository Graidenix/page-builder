import React from "react";

export interface NavBarProps {
    logo: React.ReactNode;
    links: { name: string; href: string; }[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { logo, links } = props;
    return (
        <nav className="flex justify-between py-1 px-3 h-12 items-center bg-accent-10 md:gap-x-12">
            <a aria-label="Home" href="#" className="text-white">{logo}</a>
            <div className="hidden md:flex md:gap-x-6">
                {links.map(link => (
                    <a key={link.name} className="inline-block px-2 py-1 text-sm text-white" href={link.href}>{link.name}</a>
                ))}
            </div>
        </nav>
    )
}

export default NavBar
