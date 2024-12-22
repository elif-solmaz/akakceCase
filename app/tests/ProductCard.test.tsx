import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { Product } from '../models/Product';

const mockProduct: Product = {
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
};

describe('ProductCard', () => {
    it('renders the product information correctly', () => {
        render(<ProductCard product={mockProduct} />);

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('100 TL')).toBeInTheDocument();

        const filledStars = screen.getAllByText('★');
        const filledStarCount = filledStars.filter(star => star.className.includes('filled')).length;

        expect(filledStarCount).toBe(mockProduct.dropRatio); // Expect 4 filled stars
        expect(filledStars.length).toBe(5);
    });
});
