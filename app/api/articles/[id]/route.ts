import { NextRequest, NextResponse } from "next/server";
import * as db from "@/app/api/db";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const article = db.getById(id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json();
  const { title, content, author, category } = body;

  const article = db.update(id, { title, content, author, category });

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article);
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const { id } = await params;
  const success = db.remove(id);

  if (!success) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return new NextResponse(null, { status: 204 });
}
