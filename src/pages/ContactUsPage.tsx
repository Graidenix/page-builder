import React from "react";
import {BuilderComponentsProps} from "@/types.ts";

export type ContactUsPageProps = BuilderComponentsProps & {};

const ContactUsPage: React.FC<ContactUsPageProps> = (props) => {
    const {NavBar, Footer} = props;
    return (<div>
        <NavBar />
        <h1 className="py-6">Contact Us Page</h1>
        <Footer/>
    </div>)
}

export default ContactUsPage;
