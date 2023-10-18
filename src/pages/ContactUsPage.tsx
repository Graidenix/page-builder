import React from "react";
import { BuilderComponentsFC } from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type ContactUsPageProps = BuilderComponentsFC & {};

const ContactUsPage: React.FC<ContactUsPageProps> = (props) => {
    const { NavBar, Footer, Button } = props;
    return (<div className="flex flex-col h-full">
        <NavBar {...previewData.NavBar} />
        <main className="flex-grow flex flex-col justify-center items-center gap-3">
            <h1 className="py-6 font-bold">Contact Us</h1>
            <Button>Contact us</Button>
        </main>
        <Footer {...previewData.Footer} />
    </div>)
}

export default ContactUsPage;
