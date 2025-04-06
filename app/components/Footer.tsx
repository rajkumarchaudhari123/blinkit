import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm px-4 py-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">About</a></li>
            <li><a href="#" className="hover:text-green-600">Careers</a></li>
            <li><a href="#" className="hover:text-green-600">Blog</a></li>
            <li><a href="#" className="hover:text-green-600">Press</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-2">Help & Support</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">FAQs</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">Fruits & Vegetables</a></li>
            <li><a href="#" className="hover:text-green-600">Groceries</a></li>
            <li><a href="#" className="hover:text-green-600">Snacks & Beverages</a></li>
            <li><a href="#" className="hover:text-green-600">Dairy Products</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600">Instagram</a></li>
            <li><a href="#" className="hover:text-green-600">Facebook</a></li>
            <li><a href="#" className="hover:text-green-600">Twitter</a></li>
            <li><a href="#" className="hover:text-green-600">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t pt-4 text-center text-xs text-gray-500">
        © 2025 RK Grocery. All rights reserved.
      </div>
    </footer>
  );
}
