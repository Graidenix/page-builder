import React from "react";

export interface NavBarProps {
    links: any[]
}

const NavBar: React.FC<NavBarProps> = () => {
    return (<div className="text-main-8">NavBar 1</div>)
}

export default NavBar
