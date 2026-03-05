"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Article, ArticleCategory } from "@/types/article";
import ArticleList from "@/app/articles/(components)/ArticleList";
import ArticleListHeader from "@/app/articles/(components)/ArticleListHeader";
import Pagination from "@/components/Pagination";
import { getArticles } from "@/lib/api/articles";

export default function ArticleListPage() {
  const searchParams = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = Number(searchParams.get("page") ?? "1");

  useEffect(() => {
    const query = {
      keyword: searchParams.get("keyword") ?? undefined,
      category: (searchParams.get("category") as ArticleCategory) || undefined,
      orderBy: (searchParams.get("orderBy") as "createdAt" | "title") || undefined,
      order: (searchParams.get("order") as "asc" | "desc") || undefined,
      page: currentPage,
    };

    getArticles(query).then((data) => {
      setArticles(data.articles);
      setTotalPages(data.totalPages);
    });
  }, [searchParams]);

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1 style={{ margin: 0 }}>Articles</h1>
        <Link
          href="/articles/new"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          + 게시글 작성
        </Link>
      </div>

      <ArticleListHeader />
      <ArticleList articles={articles} />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </main>
  );
}
