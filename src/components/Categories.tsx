
import CategoryCard from './CategoryCard';

const Categories = () => {
  const categories = [
    {
      title: "Building Toys",
      icon: "🧱",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      productCount: 45
    },
    {
      title: "Plush Toys",
      icon: "🧸",
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      productCount: 78
    },
    {
      title: "Educational",
      icon: "📚",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      productCount: 62
    },
    {
      title: "Electronic Toys",
      icon: "🎮",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      productCount: 34
    },
    {
      title: "Arts & Crafts",
      icon: "🎨",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      productCount: 56
    },
    {
      title: "Musical Toys",
      icon: "🎵",
      color: "bg-gradient-to-br from-red-400 to-red-600",
      productCount: 29
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized toy categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
