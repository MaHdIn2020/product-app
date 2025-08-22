import Link from "next/link";

// Temporary mock data (replace with MongoDB later)
const mockProducts = [
  {
    _id: "1",
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 99.99,
    image: "https://via.placeholder.com/300",
  },
  {
    _id: "2",
    name: "Smart Watch",
    description: "Track your health and fitness goals easily.",
    price: 149.99,
    image: "https://via.placeholder.com/300",
  },
  {
    _id: "3",
    name: "Gaming Mouse",
    description: "Precision and speed for professional gaming.",
    price: 49.99,
    image: "https://via.placeholder.com/300",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProducts.map((product) => (
          <div key={product._id} className="bg-white shadow rounded-lg p-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4 w-48 h-48 object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            <Link
              href={`/products/${product._id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
