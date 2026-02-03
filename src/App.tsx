import { ShoppingBag, Search, Package, Heart, User, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  reviews?: number;
  isTopItem?: boolean;
  isFeatured?: boolean;
}

interface Brand {
  id: string;
  name: string;
  checked: boolean;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('streetwear');
  const [priceRange, setPriceRange] = useState([20, 300]);
  const [selectedRating, setSelectedRating] = useState(4);
  const [brands, setBrands] = useState<Brand[]>([
    { id: 'nike', name: 'Nike', checked: true },
    { id: 'adidas', name: 'Adidas', checked: true },
    { id: 'puma', name: 'Puma', checked: false },
    { id: 'nb', name: 'New Balance', checked: true },
    { id: 'underarmour', name: 'Under Armour', checked: false },
    { id: 'reebok', name: 'Reebok', checked: false },
  ]);
  const [cartCount] = useState(3);

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

  const products: Product[] = [
    {
      id: 1,
      name: 'Smart Watch WH22-6 Fitness Tracker',
      price: 454,
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.8,
      reviews: 234,
      isTopItem: true,
    },
    {
      id: 2,
      name: 'Tennis Rackets for Beginners',
      price: 31,
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.5,
      reviews: 156,
    },
    {
      id: 3,
      name: 'Premium Boxing Gloves Professional',
      price: 197,
      originalPrice: 275,
      image: 'https://images.pexels.com/photos/4754148/pexels-photo-4754148.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.9,
      reviews: 412,
    },
    {
      id: 4,
      name: 'Club Kit 1 Recurve Archery Bow',
      price: 49,
      image: 'https://images.pexels.com/photos/6256004/pexels-photo-6256004.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 5,
      name: 'Nike White Therma-Fit Pullover Training Hoodie',
      price: 155,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.7,
      reviews: 678,
      isFeatured: true,
    },
    {
      id: 6,
      name: 'Lightweight White Nike Training Shoes',
      price: 210,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
      rating: 4.8,
      reviews: 523,
      isTopItem: true,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.category === selectedCategory &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );

  const toggleBrand = (brandId: string) => {
    setBrands(brands.map(b => b.id === brandId ? { ...b, checked: !b.checked } : b));
  };

  const resetFilters = () => {
    setPriceRange([20, 300]);
    setSelectedRating(4);
  };

  const resetBrands = () => {
    setBrands(brands.map(b => ({ ...b, checked: false })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B7FE8] via-[#7B6FDA] to-[#6B5FCC]">
      <div className="min-h-screen bg-white/5 backdrop-blur-3xl">
        <div className="max-w-[1600px] mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[calc(100vh-3rem)]">
            <header className="border-b border-gray-100 px-8 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <h1 className="text-3xl font-bold tracking-tight">WONDER</h1>

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
                  <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                    <Package className="w-5 h-5" />
                    <span className="hidden md:inline text-sm font-medium">Orders</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="hidden md:inline text-sm font-medium">Favourites</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors relative">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="hidden md:inline text-sm font-medium">Cart</span>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#7048f1] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                        {cartCount}
                      </span>
                    )}
                  </button>
                  <button className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-[#7048f1] text-white shadow-lg shadow-[#7048f1]/30'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </header>

            <div className="flex gap-6 p-8">
              <aside className="w-80 flex-shrink-0 space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Price Range</h3>
                    <button
                      onClick={resetFilters}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Reset
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    The average price is ${Math.round((priceRange[0] + priceRange[1]) / 2)}
                  </p>

                  <div className="relative h-32 mb-8">
                    <svg className="w-full h-full" viewBox="0 0 280 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="histogramGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#ddd6fe" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,120 L0,90 Q35,60 70,70 T140,45 Q175,35 210,50 T280,80 L280,120 Z"
                        fill="url(#histogramGradient)"
                        stroke="#a78bfa"
                        strokeWidth="2"
                      />
                    </svg>
                    <div
                      className="absolute top-0 left-0 right-0 h-full"
                      style={{
                        background: `linear-gradient(to right, transparent ${(priceRange[0] / 300) * 100}%, rgba(112, 72, 241, 0.1) ${(priceRange[0] / 300) * 100}%, rgba(112, 72, 241, 0.1) ${(priceRange[1] / 300) * 100}%, transparent ${(priceRange[1] / 300) * 100}%)`
                      }}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7048f1] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                      style={{ zIndex: priceRange[0] > priceRange[1] - 20 ? 5 : 3 }}
                    />
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7048f1] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                      style={{ zIndex: 4 }}
                    />
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-[#7048f1] rounded-full"
                        style={{
                          marginLeft: `${(priceRange[0] / 300) * 100}%`,
                          width: `${((priceRange[1] - priceRange[0]) / 300) * 100}%`
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                      ${priceRange[0]}
                    </div>
                    <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                      ${priceRange[1]}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Star Rating</h3>
                  <div className="space-y-3">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className="flex items-center gap-3 w-full group"
                      >
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">
                          {rating} Stars & up
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Brand</h3>
                    <button
                      onClick={resetBrands}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <label
                        key={brand.id}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={brand.checked}
                            onChange={() => toggleBrand(brand.id)}
                            className="w-5 h-5 rounded border-2 border-gray-300 checked:bg-[#7048f1] checked:border-[#7048f1] cursor-pointer appearance-none"
                          />
                          {brand.checked && (
                            <svg
                              className="absolute inset-0 w-5 h-5 text-white pointer-events-none"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {brand.name}
                        </span>
                      </label>
                    ))}
                  </div>
                  <button className="text-sm text-[#7048f1] hover:text-[#5f3ad1] font-medium mt-4">
                    More Brand
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Delivery Options</h3>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2.5 bg-[#7048f1] text-white rounded-xl font-medium text-sm">
                      Standard
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-gray-50 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-100">
                      Pick Up
                    </button>
                  </div>
                </div>
              </aside>

              <main className="flex-1">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`group relative ${
                        product.isFeatured
                          ? 'row-span-2 col-span-2 lg:col-span-1 lg:row-span-2'
                          : ''
                      }`}
                    >
                      <div
                        className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                          product.isFeatured
                            ? 'bg-gradient-to-br from-[#7048f1] to-[#5f3ad1] h-full'
                            : 'bg-gray-50 aspect-[4/5]'
                        }`}
                      >
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10">
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>

                        {product.isTopItem && (
                          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                            Top Item
                          </div>
                        )}

                        {product.isFeatured && (
                          <div className="absolute top-6 left-6 space-y-3 z-10">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                              <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
                                alt="User"
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-white font-semibold text-sm">4.7/5</span>
                              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                              <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"
                                alt="User"
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-white font-semibold text-sm">4.6/5</span>
                              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                              <img
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"
                                alt="User"
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-white font-semibold text-sm">5/5</span>
                              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                            </div>
                          </div>
                        )}

                        <div className={`${product.isFeatured ? 'h-full flex flex-col justify-end p-8' : 'p-6'}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                              product.isFeatured
                                ? 'h-64 object-contain drop-shadow-2xl mb-8'
                                : 'aspect-square rounded-2xl'
                            }`}
                          />
                        </div>
                      </div>

                      <div className="mt-4 px-2">
                        <h3 className={`font-semibold mb-2 line-clamp-2 ${
                          product.isFeatured ? 'text-white text-lg' : 'text-gray-900'
                        }`}>
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#7048f1] text-[#7048f1] rounded-full text-sm font-bold hover:bg-[#7048f1] hover:text-white transition-all">
                              <ShoppingCart className="w-4 h-4" />
                              ${product.price}
                            </button>
                            {product.originalPrice && (
                              <span className="text-gray-400 line-through text-sm">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
