
import { ShoppingCart, Search, Menu, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFavorites } from '@/hooks/useFavorites';

const Header = () => {
  const { favoritesCount } = useFavorites();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧸</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Play Palace
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Toys</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Sale</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">About</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="w-4 h-4" />
              {favoritesCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
                  {favoritesCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
