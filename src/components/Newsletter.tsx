
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Get Special Offers!</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and magical toy discoveries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="pl-10 h-12 bg-white border-0 text-gray-700 placeholder-gray-400 rounded-full"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 h-12 rounded-full font-semibold whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
