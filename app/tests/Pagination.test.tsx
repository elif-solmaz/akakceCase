import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';  // Bileşenin yolu
import fetchMock from 'jest-fetch-mock';
import { Product } from '../models/Product';

const mockInitialProducts: Product[] = [
    {
        code: 1,
        followCount: 100,
        dropRatio: 4,
        id: 'product1',
        name: 'Product 1',
        imageUrl: 'image1.jpg',
        price: 100,
        rating: 5,
        url: 'product1-url',
        badge: 'Popular',
        storageOptions: ['128GB'],
        countOfPrices: 1,
        freeShipping: true,
        lastUpdate: 'yesterday',
    },
];

describe('Pagination Component', () => {
    beforeAll(() => {
        fetchMock.enableMocks();
    });

    afterAll(() => {
        fetchMock.disableMocks();
    });

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('loads initial products and shows "Load More" button', async () => {
        render(<Pagination initialProducts={mockInitialProducts} nextUrl="https://mock.akakce.dev/nextPage1.json" />);

        expect(screen.getByText('Product 1')).toBeInTheDocument();

        const loadMoreButton = screen.getByText('Daha Fazla Yükle');
        expect(loadMoreButton).toBeInTheDocument();
    });

    test('shows loading state while fetching more products', async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({
                productList: mockInitialProducts,
                nextUrl: 'https://mock.akakce.dev/nextPage1.json',
            })
        );

        render(<Pagination initialProducts={mockInitialProducts} nextUrl="https://mock.akakce.dev/nextPage1.json" />);

        const loadMoreButton = screen.getByText('Daha Fazla Yükle');
        fireEvent.click(loadMoreButton);

        expect(screen.getByText('Yükleniyor...')).toBeInTheDocument();
    });

    test('displays "Tüm ürünler yüklendi" when no more products are available', async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({
                productList: mockInitialProducts,
                nextUrl: null,  // nextUrl null olduğunda tüm ürünler yüklenmiş demek
            })
        );

        render(<Pagination initialProducts={mockInitialProducts} nextUrl={null} />);
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Tüm ürünler yüklendi.')).toBeInTheDocument();
    });
});
