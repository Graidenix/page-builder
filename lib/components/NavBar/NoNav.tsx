import React from "react";

export interface NavBarProps {
    logo: React.ReactNode;
    links: { name: string; href: string; }[]
}

const NavBar: React.FC<NavBarProps> = () => {
    return null
}

export default NavBar
