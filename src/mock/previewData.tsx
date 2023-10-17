import PreviewLogo from "@/components/PreviewLogo";
import { BuilderComponentsProps } from "@/types";

export const previewData: BuilderComponentsProps = {
    NavBar: {
        links: [
            { href: "#features", name: "Features" },
            { href: "#testimonials", name: "Testimonials" },
            { href: "#pricing", name: "Pricing" },
        ],
        logo: <PreviewLogo />

    },
    Footer: {
        sections: [
            {
                name: 'Get to Know Us',
                links: [
                    { name: 'Career', href: '#' },
                    { name: 'Blog', href: '#' },
                    { name: 'About us', href: '#' },
                ]
            },
            {
                name: 'Let Us Help You',
                links: [
                    { name: 'Your Orders', href: '#' },
                    { name: 'Your Account', href: '#' },
                    { name: 'Help', href: '#' },
                    { name: 'FAQ', href: '#' },
                ]
            },
            {
                name: 'Policies',
                links: [
                    {name: 'Cookie Policy', href: '#'},
                    {name: 'Terms & Conditions', href: '#'},
                    {name: 'Shipping Rates & Policies', href: '#'},
                    {name: 'Returns & Replacements', href: '#'},
                ]
            }
        ]
    }
}


