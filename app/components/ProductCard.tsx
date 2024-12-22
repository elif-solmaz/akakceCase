import React, { useState } from "react";
import { Product } from "../models/Product";
import DetailPopup from "./DetailPopup";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleShowDetails = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const ratingStars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < product.dropRatio ? "star filled" : "star"}>★</span>
    ));

    return (
        <div className="product-card">
            <img
                src={product.imageUrl || "https://via.placeholder.com/150"}
                alt={product.name || "Ürün resmi"}
                className="product-image"
            />
            <div className="product-info">
                <h2>{product.name || "Ürün Adı Bulunamadı"}</h2>
                <p className="product-price">{product.price ? `${product.price} TL` : "Fiyat Bilgisi Yok"}</p>
                <div className="product-rating">{ratingStars}</div>
                <p className="product-followCount">Takipçi Sayısı: {product.followCount || 0}</p>
                <button onClick={handleShowDetails} className="details-button">
                    Detayları Gör
                </button>
            </div>

            {isPopupVisible && (
                <DetailPopup
                    productUrl={product.url}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}
