import { useState } from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Home = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('streetwear');
  const [priceRange, setPriceRange] = useState([20, 500]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'deals', name: 'Deals' },
    { id: 'streetwear', name: 'Streetwear' },
    { id: 'fashion', name: 'Fashion' },
  ];

  const filteredProducts = products.filter((product) =>
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.price >= priceRange[0] &&
    product.price <= priceRange[1]
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B7FE8] via-[#7B6FDA] to-[#6B5FCC]">
      <div className="min-h-screen bg-white/5 backdrop-blur-3xl">
        <div className="max-w-[1600px] mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[calc(100vh-3rem)]">
            <div className="px-8 py-8">
              <h1 className="text-4xl font-bold mb-2">Browse Products</h1>
              <p className="text-gray-600 mb-8">Discover our amazing collection of premium products</p>

              <div className="flex gap-6">
                <aside className="w-80 flex-shrink-0 space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                            selectedCategory === cat.id
                              ? 'bg-[#7048f1] text-white'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">Price Range</h3>
                      <button
                        onClick={() => setPriceRange([20, 500])}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Reset
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600">Min: ${priceRange[0]}</label>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Max: ${priceRange[1]}</label>
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </aside>

                <main className="flex-1">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <div key={product.id} className="group relative">
                          <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[4/5] mb-4">
                            <button
                              onClick={() => toggleFavorite(product.id)}
                              className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                            >
                              <Heart
                                className={`w-5 h-5 ${
                                  favorites.includes(product.id)
                                    ? 'fill-red-500 text-red-500'
                                    : 'text-gray-600'
                                }`}
                              />
                            </button>

                            {product.isTopItem && (
                              <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold z-10">
                                Top Item
                              </div>
                            )}

                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <Link
                            to={`/product/${product.id}`}
                            className="group/link"
                          >
                            <h3 className="font-semibold mb-1 line-clamp-2 group-hover/link:text-[#7048f1] transition-colors">
                              {product.name}
                            </h3>
                          </Link>

                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < Math.floor(product.rating || 0)
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">({product.reviews})</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-gray-400 line-through text-sm">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => addToCart(product, 1)}
                              className="p-2 bg-[#7048f1] text-white rounded-lg hover:bg-[#5f3ad1] transition-colors"
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gray-500">No products found</p>
                      </div>
                    )}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
