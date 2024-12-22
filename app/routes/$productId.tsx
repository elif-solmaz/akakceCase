import React, { useEffect, useState } from "react";
import { useParams } from "@remix-run/react";
import {Product} from "~/models/Product"; // URL parametrelerini almak için

export default function ProductDetail() {
    const { productId } = useParams(); // URL parametresinden ürün ID'sini alıyoruz.
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Ürün detaylarını alacak fonksiyon
        const fetchProductDetails = async () => {
            const response = await fetch(`https://mock.akakce.dev/product${productId}.json`);
            const data = await response.json();
            setProduct(data);
        };

        if (productId) {
            fetchProductDetails();
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>; // Eğer ürün yüklenememişse "Yükleniyor..." mesajı gösterilecek.
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image-detail"
                />
                <div className="product-info-detail">
                    <h1>{product.name}</h1>
                    <p className="product-badge">{product.badge}</p>
                    <p className="product-price-detail">{product.price} TL</p>
                    <p className="product-storage">Depolama Seçenekleri: {product.storageOptions.join(", ")}</p>
                    <p className="product-countOfPrices">Fiyat Sayısı: {product.countOfPrices}</p>
                    <p className="free-shipping">{product.freeShipping ? "Ücretsiz Kargo" : "Kargo Ücreti: 10 TL"}</p>
                    <p className="product-lastUpdate">Son Güncelleme: {product.lastUpdate}</p>
                </div>
            </div>
        </div>
    );
}
