import { NextRequest, NextResponse } from "next/server";
import * as db from "@/app/api/db";
import { ArticleCategory, ArticleListResponse } from "@/types/article";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const keyword = searchParams.get("keyword") ?? "";
  const category = searchParams.get("category") as ArticleCategory | null;
  const orderBy = (searchParams.get("orderBy") ?? "createdAt") as "createdAt" | "title";
  const order = (searchParams.get("order") ?? "desc") as "asc" | "desc";
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const pageSize = Math.max(1, Number(searchParams.get("pageSize") ?? "10"));

  let results = db.getAll();

  // 검색 (제목 + 내용)
  if (keyword) {
    const lower = keyword.toLowerCase();
    results = results.filter(
      (a) =>
        a.title.toLowerCase().includes(lower) ||
        a.content.toLowerCase().includes(lower)
    );
  }

  // 카테고리 필터
  if (category) {
    results = results.filter((a) => a.category === category);
  }

  // 정렬
  results = [...results].sort((a, b) => {
    const aVal = a[orderBy];
    const bVal = b[orderBy];
    const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    return order === "asc" ? cmp : -cmp;
  });

  // 페이지네이션
  const totalCount = results.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const articles = results.slice((page - 1) * pageSize, page * pageSize);

  const response: ArticleListResponse = {
    articles,
    totalCount,
    page,
    pageSize,
    totalPages,
  };

  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, content, author, category } = body;

  if (!title || !content || !author || !category) {
    return NextResponse.json(
      { error: "title, content, author, category are required" },
      { status: 400 }
    );
  }

  const article = db.create({ title, content, author, category });
  return NextResponse.json(article, { status: 201 });
}
