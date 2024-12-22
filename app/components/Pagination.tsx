import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../models/Product";

interface PaginationProps {
    initialProducts: Product[]; // Başlangıç ürün listesi
    nextUrl: string | null;    // Bir sonraki sayfanın URL'si
}

const Pagination: React.FC<PaginationProps> = ({ initialProducts, nextUrl }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts); // Ürünleri tutan state
    const [currentNextUrl, setCurrentNextUrl] = useState<string | null>(nextUrl); // Geçerli nextUrl
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadMore = async () => {
        if (currentNextUrl) {
            setIsLoading(true);
            try {
                const response = await fetch(currentNextUrl);
                const data = await response.json();
                setProducts((prev) => [...prev, ...data.productList]); // Yeni ürünleri ekle
                setCurrentNextUrl(data.nextUrl); // Yeni nextUrl'yi güncelle
            } catch (error) {
                console.error("Ürünler yüklenirken hata oluştu:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.code} product={product} />
                ))}
            </div>
            <div className={"more-button-container"}>
                {!isLoading ? (
                    currentNextUrl ? (
                        <button onClick={loadMore} className="load-more">
                            Daha Fazla Yükle
                        </button>
                    ) : (
                        <span>Tüm ürünler yüklendi.</span>
                    )
                ) : (
                    <div>Yükleniyor...</div>
                )}
            </div>
        </div>
    );
};

export default Pagination;
