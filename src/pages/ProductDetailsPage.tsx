import React from "react";
import {BuilderComponentsProps} from "@/types.ts";

export type ProductDetailsPageProps = BuilderComponentsProps & {};

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = (props) => {
    const {NavBar, Footer} = props;
    return <div>
        <NavBar />
        <h1 className="py-6">Product Page</h1>
        <Footer/>
    </div>
}

export default ProductDetailsPage
