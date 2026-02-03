import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id || '0'));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8B7FE8] via-[#7B6FDA] to-[#6B5FCC] flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-2xl mb-4">Product not found</p>
          <Link to="/" className="text-blue-300 hover:text-blue-200">
            Back to store
          </Link>
        </div>
      </div>
    );
  }

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
                Back to products
              </Link>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={product.images?.[activeImage] || product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {product.images && product.images.length > 1 && (
                    <div className="flex gap-3">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                            activeImage === idx
                              ? 'border-[#7048f1]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h1 className="text-3xl font-bold">{product.name}</h1>
                      <button
                        onClick={() => setFavorite(!favorite)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <Heart
                          className={`w-6 h-6 ${
                            favorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.rating || 0)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-4xl font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="text-sm font-semibold text-green-600">
                          Save ${Math.round(product.originalPrice - product.price)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {product.description || 'Premium quality product with excellent features and durability.'}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {product.inStock ? (
                      <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-lg font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product, quantity);
                      setQuantity(1);
                    }}
                    disabled={!product.inStock}
                    className="w-full px-6 py-4 bg-[#7048f1] text-white rounded-xl font-semibold hover:bg-[#5f3ad1] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="font-semibold">Free shipping over $50</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Returns</p>
                      <p className="font-semibold">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
