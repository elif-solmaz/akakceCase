
import {ProductDetailPage} from "~/models/ProductDetailPage";

import api from "./api";
import { ApiResponse } from "../models/ApiResponse";

// Listeleme verilerini alır.
export const fetchProductList = async (url: string): Promise<ApiResponse> => {
    try {
        const response = await api.get<ApiResponse>(url);
        return response.data;
    } catch (error) {
        console.error("API'den veri çekme hatası: ", error);
        throw error; // Hata durumunda exception fırlatalım
    }
};


// Ürün detay verilerini alır.
export const fetchProductDetails = async (url: string): Promise<ProductDetailPage> => {
    const response = await api.get<ProductDetailPage>(url);
    return response.data;
};
