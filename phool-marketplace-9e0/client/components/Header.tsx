import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { label: 'Shop', href: '/shop', submenu: true },
    { label: 'Candles', href: '/candles' },
    { label: 'Mosquito Repellents', href: '/repellents' },
    { label: 'Corporate Gifting', href: '/corporate' },
    { label: 'Track Order', href: 'https://track.example.com', external: true },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="container-responsive py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff108badec8504a91adf23416f6d78f3a%2F28895fee8d56442ba24920e40f7c46d8?format=webp&width=800&height=1200"
              alt="HSV Sugandhika"
              className="h-16 w-auto"
            />
          </Link>

          {/* Search */}
          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center gap-6">
            <Link
              to="/account"
              className="flex items-center gap-2 text-foreground hover:text-gold transition"
            >
              <User className="w-5 h-5" />
              <span className="text-sm">Account</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 relative text-foreground hover:text-gold transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Cart</span>
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200">
          <div className="container-responsive flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-sm font-medium text-foreground hover:text-gold transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="py-3 text-sm font-medium text-foreground hover:text-gold transition"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link to="/" className="flex-1 text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff108badec8504a91adf23416f6d78f3a%2F28895fee8d56442ba24920e40f7c46d8?format=webp&width=800&height=1200"
            alt="HSV Sugandhika"
            className="h-12 w-auto mx-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 hover:bg-gray-100 rounded transition"
          >
            <Search className="w-6 h-6" />
          </button>
          <Link to="/cart" className="p-2 relative hover:bg-gray-100 rounded transition">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-gold text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="lg:hidden px-4 py-3 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 py-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-foreground hover:bg-cream hover:text-gold transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-foreground hover:bg-cream hover:text-gold transition"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/account"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2 text-foreground hover:bg-cream hover:text-gold transition"
          >
            Account
          </Link>
        </div>
      )}
    </header>
  );
};
