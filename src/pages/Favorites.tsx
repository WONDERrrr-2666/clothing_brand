import { Link } from 'react-router-dom';
import { Heart, ChevronLeft, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<number[]>([5]);
  const { addToCart } = useCart();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B7FE8] via-[#7B6FDA] to-[#6B5FCC]">
      <div className="min-h-screen bg-white/5 backdrop-blur-3xl">
        <div className="max-w-[1600px] mx-auto p-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-[#7048f1] hover:text-[#5f3ad1] mb-8 font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to shopping
              </Link>

              <h1 className="text-4xl font-bold mb-2">Favorites</h1>
              <p className="text-gray-600 mb-8">{favoriteProducts.length} items saved</p>

              {favoriteProducts.length === 0 ? (
                <div className="text-center py-16">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
                  <p className="text-gray-600 mb-8">Save items you love to your favorites list</p>
                  <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {favoriteProducts.map((product) => (
                    <div key={product.id} className="group">
                      <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[4/5] mb-4">
                        <button
                          onClick={() =>
                            setFavorites((prev) =>
                              prev.includes(product.id)
                                ? prev.filter((id) => id !== product.id)
                                : [...prev, product.id]
                            )
                          }
                          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                        >
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                        </button>

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <Link to={`/product/${product.id}`} className="group/link">
                        <h3 className="font-semibold mb-2 line-clamp-2 group-hover/link:text-[#7048f1] transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="font-bold">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full px-4 py-2 bg-[#7048f1] text-white rounded-lg hover:bg-[#5f3ad1] font-semibold flex items-center justify-center gap-2 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
