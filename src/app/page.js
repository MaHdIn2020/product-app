import Navbar from "@/components/Navbar";
import ProductHighlights from "@/components/ProductHighlights";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Prod Store
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore our latest products and add your own!
        </p>
        <Link
          href="/products"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
        >
          View Products
        </Link>
      </section>

      {/* Product Highlights */}
      <ProductHighlights limit={3} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Prod Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
