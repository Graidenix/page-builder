import React from "react";
import { BuilderComponentsFC } from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type ContactUsPageProps = BuilderComponentsFC & {};

const ContactUsPage: React.FC<ContactUsPageProps> = (props) => {
    const { NavBar, Footer } = props;
    return (<div>
        <NavBar {...previewData.NavBar} />
        <h1 className="py-6">Contact Us Page</h1>
        <Footer {...previewData.Footer} />
    </div>)
}

export default ContactUsPage;
