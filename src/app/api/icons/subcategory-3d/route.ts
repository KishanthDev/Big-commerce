import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bigcommerce");
    const collection = db.collection("icons");

    const data = await collection.find({}).toArray();

    return NextResponse.json(data);
  } catch (err) {
    console.error("Error fetching subcategory 3D icons:", err);
    return new NextResponse("Failed to fetch subcategory icons", { status: 500 });
  }
}
