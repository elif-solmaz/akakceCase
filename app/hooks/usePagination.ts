import { useState, useEffect } from "react";
import axios from "axios";

export const usePagination = () => {
    const [products, setProducts] = useState<any[]>([]);  // Ürünleri tutan state
    const [nextUrl, setNextUrl] = useState<string | null>("https://mock.akakce.dev/page.json");  // Next URL, ilk URL ile başlıyor
    const [isLoading, setIsLoading] = useState<boolean>(false);  // Yükleniyor durumu

    // Veriyi çekmek için fetchData fonksiyonu
    const fetchData = async (url: string) => {
        setIsLoading(true); // Yükleme durumunu başlatıyoruz
        try {
            const response = await axios.get(url);  // API'den veri çekiyoruz
            setProducts((prevProducts) => [
                ...prevProducts,  // Önceki ürünleri koruyoruz
                ...response.data.productList,  // Yeni gelen ürünleri ekliyoruz
            ]);
            setNextUrl(response.data.nextUrl);  // Sonraki URL'yi ayarlıyoruz
        } catch (error) {
            console.error("Veri yükleme hatası:", error);  // Hata durumunu yönetiyoruz
        } finally {
            setIsLoading(false);  // Yükleme durumunu sonlandırıyoruz
        }
    };

    // İlk sayfa verisini yükle
    useEffect(() => {
        if (nextUrl) {
            fetchData(nextUrl);  // Başlangıçta nextUrl ile ilk veriyi çekiyoruz
        }
    }, []); // Sadece component mount olduğunda çalışacak

    // "Daha Fazla Yükle" butonuna tıklandığında, yeni sayfa verilerini çekmek için
    const loadMore = () => {
        if (nextUrl) {
            fetchData(nextUrl);  // Bir sonraki sayfa verisini çekiyoruz
        }
    };

    return { products, loadMore, isLoading, nextUrl };
};

