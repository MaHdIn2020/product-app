import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const uri = process.env.MONGO_URL
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

// GET product by ID
export async function GET(req, { params }) {
  try {
    const { id } = params;
    const collection = await getCollection();
    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(product, { status: 200 });
  } catch (err) {
    console.error("GET /api/products/[id] error:", err);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}
