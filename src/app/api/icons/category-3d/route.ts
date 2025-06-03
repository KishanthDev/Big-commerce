import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bigcommerce");
    const collection = db.collection("categoryicons");

    const data = await collection.find({}).toArray();
    
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching category 3D icons:", err);
    return new NextResponse("Failed to fetch category icons", { status: 500 });
  }
}
