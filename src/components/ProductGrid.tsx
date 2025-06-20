import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Rainbow Building Blocks Set",
      price: 24.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop",
      rating: 5,
      reviews: 128,
      category: "Building Toys",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Cute Teddy Bear",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      rating: 4,
      reviews: 89,
      category: "Plush Toys",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Educational Puzzle Game",
      price: 15.99,
      originalPrice: 19.99,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop",
      rating: 5,
      reviews: 67,
      category: "Educational",
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Remote Control Car",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4,
      reviews: 145,
      category: "Electronic Toys",
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: "Art & Craft Kit",
      price: 32.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      rating: 5,
      reviews: 92,
      category: "Arts & Crafts",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Musical Keyboard",
      price: 28.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      rating: 4,
      reviews: 78,
      category: "Musical Toys",
      isNew: false,
      isSale: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Toys
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of the most popular and engaging toys that children love
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-purple-300 hover:border-purple-500 text-purple-600 hover:text-purple-700 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
