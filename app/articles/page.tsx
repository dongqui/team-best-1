"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import ArticleList from "@/app/articles/(components)/ArticleList";
import { getArticles } from "@/lib/api/articles";

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

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

      <ArticleList articles={articles} />
    </main>
  );
}
