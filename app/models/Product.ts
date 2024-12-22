export interface Product {
    code: number;
    followCount: number;
    dropRatio: number;
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    rating: number;
    url: string; // Ürün detay URL'si
    badge: string; // Ürünün badge bilgisi (örneğin "En Popüler")
    storageOptions: string[]; // Depolama seçenekleri (örneğin ["128GB", "256GB", "512GB"])
    countOfPrices: number; // Fiyat sayısı (kaç farklı fiyat bulunuyor)
    freeShipping: boolean; // Ücretsiz kargo bilgisi
    lastUpdate: string; // Son güncelleme tarihi (örneğin "yesterday")
}
