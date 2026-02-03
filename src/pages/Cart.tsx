import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const shipping = items.length > 0 ? (total > 50 ? 0 : 9.99) : 0;
  const tax = total * 0.1;
  const finalTotal = total + shipping + tax;

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

              <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
                  <p className="text-gray-600 mb-8">Add some items to get started!</p>
                  <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <Link
                            to={`/product/${item.id}`}
                            className="font-semibold hover:text-[#7048f1] transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">${item.price}</p>

                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                              >
                                −
                              </button>
                              <span className="px-3 py-1 border-l border-r border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4">
                      <h3 className="font-semibold text-lg">Order Summary</h3>

                      <div className="space-y-3 border-t border-gray-200 pt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-semibold">${total.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span className="font-semibold">
                            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tax</span>
                          <span className="font-semibold">${tax.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-[#7048f1]">${finalTotal.toFixed(2)}</span>
                      </div>

                      <Link
                        to="/checkout"
                        className="block w-full px-6 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1] text-center transition-colors"
                      >
                        Proceed to Checkout
                      </Link>

                      <Link
                        to="/"
                        className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 text-center transition-colors"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
