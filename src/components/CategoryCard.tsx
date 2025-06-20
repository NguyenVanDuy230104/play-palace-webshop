
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
  productCount: number;
}

const CategoryCard = ({ title, icon, color, productCount }: CategoryCardProps) => {
  return (
    <div className={`${color} rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group`}>
      <div className="text-center">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{productCount} toys</p>
      </div>
    </div>
  );
};

export default CategoryCard;
