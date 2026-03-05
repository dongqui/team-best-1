"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import ArticleList from "@/app/articles/(components)/ArticleList";
// TODO: import { getArticles } from "@/lib/api/articles";

export default function ArticleListPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // TODO: getArticles()를 호출하고, 반환된 결과로 articles 상태를 업데이트하세요.
    // 예시:
    //   getArticles().then((data) => setArticles(data));
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

      {/* TODO: ArticleList 컴포넌트를 렌더링하고, articles 상태를 prop으로 전달하세요. */}
    </main>
  );
}
