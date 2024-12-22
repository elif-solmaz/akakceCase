
import {ProductDetail} from "~/models/ProductDetail";

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
export const fetchProductDetails = async (url: string): Promise<ProductDetail> => {
    const response = await api.get<ProductDetail>(url);
    return response.data;
};
