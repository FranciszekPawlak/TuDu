import { auth } from "@/auth";
import { NextResponse } from "next/server";
import MongoClient from "@/db/MongoClient";

export async function GET(req: NextResponse) {
  const session = await auth();
  console.log(session?.user.email);

  const example = await MongoClient.collection("example").find({}).toArray();

  return NextResponse.json(example);
}
