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
        links: []
    }
}


