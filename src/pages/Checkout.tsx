import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.1;
  const finalTotal = total + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.email || !formData.firstName || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#8B7FE8] via-[#7B6FDA] to-[#6B5FCC] flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
          <p className="text-sm text-gray-500 mb-8">
            Order confirmation has been sent to {formData.email}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-gray-600 mb-2">Order ID: #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p className="text-2xl font-bold text-gray-900">${finalTotal.toFixed(2)}</p>
          </div>

          <Link
            to="/"
            className="w-full px-6 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1] text-center block mb-3"
          >
            Continue Shopping
          </Link>
          <Link
            to="/orders"
            className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 text-center block"
          >
            View Orders
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
                to="/cart"
                className="flex items-center gap-2 text-[#7048f1] hover:text-[#5f3ad1] mb-8 font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to cart
              </Link>

              <h1 className="text-4xl font-bold mb-8">Checkout</h1>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex gap-4 mb-8">
                    {[1, 2, 3].map((s) => (
                      <button
                        key={s}
                        onClick={() => setStep(s)}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                          step === s
                            ? 'bg-[#7048f1] text-white'
                            : step > s
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
                      </button>
                    ))}
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Shipping Address</h2>

                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={formData.address}
                          onChange={handleChange}
                          className="col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleChange}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <input
                          type="text"
                          name="zip"
                          placeholder="ZIP Code"
                          value={formData.zip}
                          onChange={handleChange}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        className="w-full px-6 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1]"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Payment Method</h2>

                      <div className="space-y-4">
                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card Number"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="cardExpiry"
                            placeholder="MM/YY"
                            value={formData.cardExpiry}
                            onChange={handleChange}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                          <input
                            type="text"
                            name="cardCvc"
                            placeholder="CVC"
                            value={formData.cardCvc}
                            onChange={handleChange}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setStep(1)}
                          className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400"
                        >
                          Back
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          className="flex-1 px-6 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1]"
                        >
                          Review Order
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Review Order</h2>

                      <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                        <p>
                          <strong>Name:</strong> {formData.firstName} {formData.lastName}
                        </p>
                        <p>
                          <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                          <strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zip}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setStep(2)}
                          className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400"
                        >
                          Back
                        </button>
                        <button
                          onClick={handlePlaceOrder}
                          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 sticky top-8">
                    <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                    <div className="space-y-3 border-t border-gray-200 pt-4 mb-4 max-h-48 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>
                            {item.name} x {item.quantity}
                          </span>
                          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

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

                      <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-[#7048f1]">${finalTotal.toFixed(2)}</span>
                      </div>
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
