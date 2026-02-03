import { Link } from 'react-router-dom';
import { ChevronLeft, LogOut, User, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, ST 12345',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

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

              <h1 className="text-4xl font-bold mb-8">My Profile</h1>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-2xl font-bold">Personal Information</h2>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-4 py-2 border-2 border-[#7048f1] text-[#7048f1] rounded-lg font-semibold hover:bg-[#7048f1] hover:text-white transition-colors"
                      >
                        {isEditing ? 'Cancel' : 'Edit'}
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                        ) : (
                          <p className="text-gray-700">{profile.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Email
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                        ) : (
                          <p className="text-gray-700">{profile.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Phone
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                        ) : (
                          <p className="text-gray-700">{profile.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                          Address
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7048f1]"
                          />
                        ) : (
                          <p className="text-gray-700">{profile.address}</p>
                        )}
                      </div>

                      {isEditing && (
                        <button
                          onClick={handleSave}
                          className="w-full px-6 py-3 bg-[#7048f1] text-white rounded-lg font-semibold hover:bg-[#5f3ad1] transition-colors"
                        >
                          Save Changes
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-[#7048f1] to-[#5f3ad1] rounded-xl p-8 text-white text-center">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                    />
                    <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                    <p className="text-purple-100 mb-6">{profile.email}</p>

                    <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors border border-white/30">
                      Change Avatar
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-4">
                    <Link
                      to="/orders"
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Package className="w-5 h-5" />
                      <span className="font-semibold">My Orders</span>
                    </Link>
                    <Link
                      to="/favorites"
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                      <span className="font-semibold">My Favorites</span>
                    </Link>
                    <button className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-semibold">
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
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

import { Package, Heart } from 'lucide-react';
