import React from "react";
import { Product } from "../models/Product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const ratingStars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < product.dropRatio ? "star filled" : "star"}>★</span>
    ));

    return (
        <div className="product-card">
            <img
                src={product.imageUrl || "https://via.placeholder.com/150"}
                alt={product.name}
                className="product-image"
            />
            <div className="product-info">
                <h2>{product.name}</h2> {/* Ürün adı buraya geliyor */}
                <p className="product-price">{product.price} TL</p>
                <div className="product-rating">{ratingStars}</div>
                <p className="product-followCount">Takipçi Sayısı: {product.followCount}</p>
            </div>
        </div>
    );
}