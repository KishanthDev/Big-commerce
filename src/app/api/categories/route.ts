import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("bigcommerce");
    const categories = await db.collection("categories").find({}).toArray();
    console.log("Fetched categories:", categories.length);
    
    return NextResponse.json(categories);
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
};
