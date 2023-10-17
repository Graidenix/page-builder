import React from "react";

export interface FooterProps {
    links: any[]
}

const Footer: React.FC<FooterProps> = () => {
    return <footer className="bg-black p-3 text-white rounded-t-lg">
        Footer 2
    </footer>;
}

export default Footer
