import { Search, Package, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.length;

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'deals', name: 'Deals' },
    { id: 'new', name: 'New Arrivals' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'wellness', name: 'Health & Wellness' },
    { id: 'art', name: 'Art' },
    { id: 'home', name: 'Home' },
    { id: 'streetwear', name: 'Streetwear' },
    { id: 'music', name: 'Music' },
    { id: 'gaming', name: 'Gaming' },
  ];

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-3xl font-bold tracking-tight">
              WONDER
            </Link>

            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-12 pr-6 py-2.5 bg-gray-50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#7048f1] w-80 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/orders"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Package className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Orders</span>
            </Link>
            <Link
              to="/favorites"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Favorites</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7048f1] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/profile"
              className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <User className="w-5 h-5 text-gray-600" />
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/?category=${category.id}`}
              className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-12 pr-6 py-2.5 bg-gray-50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#7048f1] text-sm"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
