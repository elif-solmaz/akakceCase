import React, { useEffect, useState } from "react";
import { ProductDetailPage } from "../models/ProductDetailPage";
import { FaShippingFast } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
    productUrl: string;
    onClose: () => void;
}

export default function DetailPopup({ productUrl, onClose }: Props) {
    const [productDetails, setProductDetails] = useState<ProductDetailPage | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (productUrl) {
            const fetchProductDetails = async () => {
                try {
                    const response = await fetch(productUrl);
                    if (!response.ok) {
                        throw new Error("Ürün detayları alınamadı!");
                    }
                    const data = await response.json();
                    setProductDetails(data);
                    setError(null);
                } catch (err: any) {
                    setError("Veri yüklenirken bir hata oluştu. Lütfen tekrar deneyin.");
                    console.error(err);
                }
            };

            fetchProductDetails();
        }
    }, [productUrl]);

    // Yıldız derecelendirmesini oluşturma fonksiyonu
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars).fill(<FaStar size={20} color="gold" />)}
                {halfStar && <FaStarHalfAlt size={20} color="gold" />}
                {Array(emptyStars).fill(<FaStar size={20} color="gray" />)}
            </>
        );
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-popup" onClick={onClose}>
                    ×
                </button>

                {productDetails ? (
                    <div className="product-detail">
                        <h2 className="product-name">
                            {productDetails.productName}
                            {productDetails?.freeShipping && (
                                <div className="free-shipping-banner">
                                    <FaShippingFast size={24} color="green" />
                                </div>
                            )}
                        </h2>
                        <img
                            src={productDetails.imageUrl || "https://via.placeholder.com/150"}
                            alt={productDetails.productName}
                            className="popup-product-image"
                        />
                        <table className="product-detail-table">
                            <tbody>
                            <tr>
                                <td><strong>Marka:</strong></td>
                                <td>{productDetails.mkName}</td>
                            </tr>
                            <tr>
                                <td><strong>Ürün Adı:</strong></td>
                                <td>{productDetails.productName}</td>
                            </tr>
                            <tr>
                                <td><strong>Fiyat:</strong></td>
                                <td>{productDetails.price.toLocaleString()} TL</td>
                            </tr>
                            <tr>
                                <td><strong>Değerlendirme:</strong></td>
                                <td>
                                    <div className="rating-stars">
                                        {renderStars(productDetails.rating)}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Depolama Seçenekleri:</strong></td>
                                <td>{productDetails.storageOptions.join(", ")}</td>
                            </tr>
                            <tr>
                                <td><strong>Fiyat Sayısı:</strong></td>
                                <td>{productDetails.countOfPrices}</td>
                            </tr>
                            <tr>
                                <td><strong>Son Güncelleme:</strong></td>
                                <td>{productDetails.lastUpdate}</td>
                            </tr>
                            <tr>
                                <td><strong>Badge:</strong></td>
                                <td>{productDetails.badge}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Ürün detayları yükleniyor...</p>
                )}
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
}
