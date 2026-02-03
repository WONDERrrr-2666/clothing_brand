import { Link } from 'react-router-dom';
import { ChevronLeft, Package } from 'lucide-react';

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2026-02-01',
    status: 'delivered',
    total: 299.99,
    items: 3,
  },
  {
    id: 'ORD-002',
    date: '2026-01-28',
    status: 'shipped',
    total: 149.99,
    items: 2,
  },
  {
    id: 'ORD-003',
    date: '2026-01-15',
    status: 'processing',
    total: 89.99,
    items: 1,
  },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
};

export const Orders = () => {
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

              <h1 className="text-4xl font-bold mb-8">My Orders</h1>

              {mockOrders.length === 0 ? (
                <div className="text-center py-16">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">No orders yet</h2>
                  <p className="text-gray-600 mb-8">Start shopping to place your first order</p>
                  <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1]"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-lg">{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(order.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-sm text-gray-600">{order.items} item(s)</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-2xl font-bold">${order.total.toFixed(2)}</p>
                          <span
                            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                              statusColors[order.status as keyof typeof statusColors]
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>

                        <button className="px-6 py-2 border-2 border-[#7048f1] text-[#7048f1] rounded-lg font-semibold hover:bg-[#7048f1] hover:text-white transition-colors">
                          View Details
                        </button>
                      </div>
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
