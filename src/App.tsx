import { ShoppingBag, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  label: string;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('streetwear');

  const categories: Category[] = [
    { id: 'streetwear', name: 'Streetwear', label: 'Urban Edge' },
    { id: 'mens', name: 'Men\'s Fashion', label: 'Men\'s' },
    { id: 'womens', name: 'Women\'s Fashion', label: 'Women\'s' },
    { id: 'accessories', name: 'Accessories', label: 'Accessories' },
    { id: 'essentials', name: 'Essentials', label: 'Essentials' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Oversized Graphic Tee',
      price: 52,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
    },
    {
      id: 2,
      name: 'Tech Joggers',
      price: 98,
      image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
    },
    {
      id: 3,
      name: 'Canvas High-Tops',
      price: 128,
      image: 'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
    },
    {
      id: 4,
      name: 'Windbreaker Jacket',
      price: 135,
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'streetwear',
    },
    {
      id: 5,
      name: 'Men\'s Linen Shirt',
      price: 75,
      image: 'https://images.pexels.com/photos/7679447/pexels-photo-7679447.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mens',
    },
    {
      id: 6,
      name: 'Tailored Trousers',
      price: 92,
      image: 'https://images.pexels.com/photos/7679425/pexels-photo-7679425.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mens',
    },
    {
      id: 7,
      name: 'Wool Blazer',
      price: 185,
      image: 'https://images.pexels.com/photos/1554534/pexels-photo-1554534.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mens',
    },
    {
      id: 8,
      name: 'Premium Denim Jeans',
      price: 118,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mens',
    },
    {
      id: 9,
      name: 'Silk Slip Dress',
      price: 145,
      image: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'womens',
    },
    {
      id: 10,
      name: 'Maxi Linen Dress',
      price: 125,
      image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'womens',
    },
    {
      id: 11,
      name: 'Fitted Blazer',
      price: 165,
      image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'womens',
    },
    {
      id: 12,
      name: 'High-Waisted Trousers',
      price: 108,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'womens',
    },
    {
      id: 13,
      name: 'Leather Crossbody Bag',
      price: 165,
      image: 'https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'accessories',
    },
    {
      id: 14,
      name: 'Merino Wool Beanie',
      price: 42,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'accessories',
    },
    {
      id: 15,
      name: 'Silk Scarf',
      price: 58,
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'accessories',
    },
    {
      id: 16,
      name: 'Minimalist Watch',
      price: 195,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'accessories',
    },
    {
      id: 17,
      name: 'Essential White Tee',
      price: 38,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'essentials',
    },
    {
      id: 18,
      name: 'Black Crew Neck',
      price: 42,
      image: 'https://images.pexels.com/photos/3622622/pexels-photo-3622622.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'essentials',
    },
    {
      id: 19,
      name: 'Neutral Tank Top',
      price: 32,
      image: 'https://images.pexels.com/photos/7679447/pexels-photo-7679447.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'essentials',
    },
    {
      id: 20,
      name: 'Basic Shorts',
      price: 52,
      image: 'https://images.pexels.com/photos/7679425/pexels-photo-7679425.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'essentials',
    },
  ];

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-light tracking-widest">WONDER</div>

            <div className="hidden md:flex space-x-8">
              <a href="#shop" className="text-gray-700 hover:text-black transition-colors">Shop</a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-600 transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#shop" className="block text-gray-700 hover:text-black transition-colors">Shop</a>
              <a href="#about" className="block text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-black transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-4">WONDER</h1>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wide">Timeless Elegance, Sustainable Style</p>
          <button className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors tracking-wider text-sm">
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-wide mb-4">Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections designed for every lifestyle
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 transition-all tracking-wide text-sm font-light border ${
                  selectedCategory === category.id
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-700 hover:border-black'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-light mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light tracking-wide mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Wonder was born from a simple belief: fashion should be beautiful, sustainable, and timeless.
                We create pieces that transcend seasons, designed to be loved and worn for years to come.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every garment is crafted with care using ethically sourced materials and sustainable practices.
                We work with artisans who share our commitment to quality and environmental responsibility.
              </p>
            </div>
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7679425/pexels-photo-7679425.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Wonder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light tracking-wide mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates on new arrivals, special offers, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors tracking-wider text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-light tracking-widest mb-4">WONDER</h3>
              <p className="text-gray-400 text-sm">
                Timeless fashion for the conscious consumer
              </p>
            </div>
            <div>
              <h4 className="font-light mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Wonder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
