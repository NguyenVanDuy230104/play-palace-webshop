
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { FavoritesProvider } from '@/hooks/useFavorites';
import { CartProvider } from '@/hooks/useCart';

const Index = () => {
  return (
    <FavoritesProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Categories />
          <ProductGrid />
          <Newsletter />
          <Footer />
        </div>
      </CartProvider>
    </FavoritesProvider>
  );
};

export default Index;
