import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import MongoClient from "@/db/MongoClient";

export async function GET(req: NextRequest) {
  const session = await auth();
  console.log(session?.user.email);

  const example = await MongoClient.db("tudu_master")
    .collection("example")
    .find({})
    .toArray();

  return NextResponse.json(example);
}
