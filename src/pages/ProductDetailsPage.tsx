import React from "react";
import {BuilderComponentsFC} from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type ProductDetailsPageProps = BuilderComponentsFC & {};

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = (props) => {
    const {NavBar, Footer} = props;
    return <div>
        <NavBar {...previewData.NavBar}/>
        <h1 className="py-6">Product Page</h1>
        <Footer {...previewData.Footer}/>
    </div>
}

export default ProductDetailsPage
