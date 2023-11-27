import { NextResponse } from "next/server";

// get users data

export async function GET() {
  const res = await fetch("http://localhost:3000/api/users");
  const response = await res.json();
  return NextResponse.json({ id: "1", name: "gopal" });
}

// post users data

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  return NextResponse.json({ response });
}
