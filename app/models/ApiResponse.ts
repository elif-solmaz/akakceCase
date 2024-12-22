import { Product } from "./Product";

export interface ApiResponse {
    horizontalProductList: Product[];
    productList: Product[];
    nextUrl: string | null;
}
