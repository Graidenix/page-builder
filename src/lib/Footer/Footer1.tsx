import React from "react";

export interface FooterProps {
    links: any[]
}

const Footer: React.FC<FooterProps> = () => {
    return <footer className="bg-main-10 p-3 text-white">
        Footer 1
    </footer>;
}

export default Footer
