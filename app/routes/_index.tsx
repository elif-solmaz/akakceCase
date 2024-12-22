import { useLoaderData } from "@remix-run/react";
import { ApiResponse } from "../models/ApiResponse";
import HorizontalProductList from "../components/HorizontalProductList";
import Pagination from "../components/Pagination";
import { fetchProductList } from "~/services/productService";

export const loader = async () => {
    const data = await fetchProductList("/page.json");
    return data;
};

export default function _index() {
    const { horizontalProductList, productList, nextUrl } = useLoaderData<ApiResponse>();

    return (
        <div className="container">
            <h1>Ürün Listesi</h1>

            {/* Yatay Ürün Listesi */}
            <HorizontalProductList products={horizontalProductList} />

            {/* Dikey Ürün Listesi */}
            <Pagination initialProducts={productList} nextUrl={nextUrl} />
        </div>
    );
}
