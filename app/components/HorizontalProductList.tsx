import React from "react";
import { Product } from "../models/Product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

export default function HorizontalProductList({ products }: Props) {
    return (
        <div className="horizontal-scroll">
            {products.map((product) => (
                <ProductCard key={product.code} product={product} />
            ))}
        </div>
    );
}
