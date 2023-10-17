import React from "react";

export interface NavBarProps {
    logo: React.ReactNode;
    links: { name: string; href: string; }[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const { links, logo } = props;
    return (<div className="relative z-50 flex justify-between">
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
                <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-main-9 text-white hover:text-slate-100 hover:bg-main-10 active:bg-main-11 active:text-blue-100 focus-visible:outline-main-10" href="#">
                    <span>Get started <span className="hidden lg:inline">today</span></span>
                </a>
            </div>
    </div>
    )
}

export default NavBar
