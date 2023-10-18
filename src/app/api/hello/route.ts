import { NextResponse } from "next/server";

export default function GET(req: Request) {
  console.log("here");
  return NextResponse.json("200");
}
