
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-tight">
            Magical Toys for Every Child
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover a world of wonder with our carefully curated collection of toys that spark imagination and bring joy to every moment of play.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-pink-400 text-gray-700 hover:text-pink-600 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
              View Categories
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <span className="hidden sm:block">Free Shipping Over $50</span>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <span className="hidden sm:block">10,000+ Happy Kids</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
