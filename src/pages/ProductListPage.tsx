import React from "react";
import { BuilderComponentsFC } from "@/types.ts";
import { previewData } from "@/mock/previewData";

export type ProductListPageProps = BuilderComponentsFC & {};

const ProductListPage: React.FC<ProductListPageProps> = (props) => {
    const { NavBar, Footer } = props;
    return (<div className="flex flex-col h-full">
        <NavBar {...previewData.NavBar} />
        <main className="flex-grow">
            <h1 className="py-6">Product List Page</h1>
        </main>
        <Footer {...previewData.Footer} />
    </div>)
}

export default ProductListPage;
