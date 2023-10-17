import React from "react";
import {BuilderComponentsProps} from "@/types.ts";

export type ProductListPageProps = BuilderComponentsProps & {};

const ProductListPage: React.FC<ProductListPageProps> = (props) => {
    const {NavBar, Footer} = props;
    return (<div>
        <NavBar/>
        <h1 className="py-6">Product List Page</h1>
        <Footer/>
    </div>)
}

export default ProductListPage;
