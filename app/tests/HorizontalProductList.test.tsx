import { render, screen } from '@testing-library/react';
import HorizontalProductList from '../components/HorizontalProductList';
import { Product } from '../models/Product';

const mockProducts: Product[] = [
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
    {
        code: 2,
        followCount: 200,
        dropRatio: 3,
        id: 'product2',
        name: 'Product 2',
        imageUrl: 'image2.jpg',
        price: 150,
        rating: 4,
        url: 'product2-url',
        badge: 'New',
        storageOptions: ['64GB'],
        countOfPrices: 1,
        freeShipping: false,
        lastUpdate: '2 days ago',
    },
];

describe('HorizontalProductList', () => {
    it('renders the list of products correctly', () => {
        render(<HorizontalProductList products={mockProducts} />);

        const productCards = screen.getAllByRole('img');
        expect(productCards).toHaveLength(mockProducts.length);

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
});
