import React from "react";
import { BuilderComponentsFC } from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type ProductListPageProps = BuilderComponentsFC & {};

const ProductListPage: React.FC<ProductListPageProps> = (props) => {
    const { NavBar, Footer } = props;
    return (<div>
        <NavBar {...previewData.NavBar} />
        <h1 className="py-6">Product List Page</h1>
        <Footer {...previewData.Footer} />
    </div>)
}

export default ProductListPage;
