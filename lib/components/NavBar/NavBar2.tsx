import React from "react";
import useComponents from '../../hooks/useComponents.ts'

export interface NavBarProps {
    logo: React.ReactNode;
    links: { name: string; href: string; }[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { links, logo } = props;
    return (<nav className="relative z-50 h-12 flex p-1 justify-between items-center">
        <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" className="text-main-10" href="#">{logo}</a>
            <div className="hidden md:flex md:gap-x-6">
                {links.map(link => (
                    <a key={link.name} className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href={link.href}>{link.name}</a>
                ))}
            </div>
        </div>
        <div className="flex items-center gap-x-5 md:gap-x-8">
                <div className="hidden md:block">
                    <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#">Sign in</a>
                </div>
                <Button as="a" href="#">
                    <span>Get started <span className="hidden lg:inline">today</span></span>
                </Button>
            </div>
    </nav>
    )
}

export default NavBar
