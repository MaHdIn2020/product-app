import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.73swigz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function getCollection() {
  if (!client.isConnected?.()) await client.connect();
  return client.db(process.env.DB_NAME).collection("products");
}

// GET all products
export async function GET() {
  try {
    const collection = await getCollection();
    const products = await collection.find().toArray();
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

// POST a new product
export async function POST(req) {
  try {
    const { name, description, price } = await req.json();

    if (!name || !description || !price)
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });

    const collection = await getCollection();
    const result = await collection.insertOne({
      name,
      description,
      price: parseFloat(price),
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Product added", productId: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
