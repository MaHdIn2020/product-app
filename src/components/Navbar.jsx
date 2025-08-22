'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = status === 'authenticated';

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-400">
            Prod
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/products"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              href="/add-product"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Add Product
            </Link>
          </div>

          {/* Action Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn && (
              <>
                <button
                  onClick={signIn}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition"
                >
                  Sign In
                </button>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm font-medium transition"
                >
                  Register
                </Link>
              </>
            )}
            {isLoggedIn && (
              <button
                onClick={signOut}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/products"
            className="block text-gray-300 hover:text-white transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/add-product"
            className="block text-gray-300 hover:text-white transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Add Product
          </Link>
          {!isLoggedIn && (
            <>
              <button
                onClick={signIn}
                className="w-full text-left px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition"
              >
                Sign In
              </button>
              <Link
                href="/register"
                className="block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded text-sm font-medium mt-1 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={signOut}
              className="w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium mt-1 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
