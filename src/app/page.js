import LoginButton from "@/components/LoginButton";
import Navbar from "@/components/Navbar";
import ProductsPage from "@/components/ProductsPage";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {/* Navbar */}
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
      <Link href="/products" className="...">
          <ProductsPage></ProductsPage>
        </Link>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Prod Store. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/products" className="hover:text-white">Products</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
