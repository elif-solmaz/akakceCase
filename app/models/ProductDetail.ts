// models/ProductDetailPage.ts
export interface ProductDetail {
    code: number;
    productName: string;
    imageUrl: string;
    price: number;
    storageOptions: string[];
    followCount: number;
    dropRatio: number;
    lastUpdate: string;
    url: string;
    badge: string;
}
