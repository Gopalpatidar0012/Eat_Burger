import { NextResponse } from "next/server";

export async function GET(req: Request, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const response = await res.json();
  return NextResponse.json({ data: response });
}

export async function PUT(req: Request, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  const response = await res.json();
  return NextResponse.json({ data: response });
}
