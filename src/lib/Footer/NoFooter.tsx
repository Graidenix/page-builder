import React from "react";

export interface FooterProps {
    sections: {
        name: string;
        links: { name: string; href: string; }[]
    }[];
}

const Footer: React.FC<FooterProps> = () => {
    return null;
}

export default Footer