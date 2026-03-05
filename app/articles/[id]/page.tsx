"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Article } from "@/types/article";
import { getArticle, deleteArticle } from "@/lib/api/articles";
import { CATEGORY_OPTIONS } from "@/app/articles/(constrnats)";

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticle(id).then((data) => setArticle(data));
  }, [id]);

  async function handleDelete() {
    await deleteArticle(id);
    router.push("/articles");
  }

  if (!article) return <main><p>Loading...</p></main>;

  const categoryLabel =
    CATEGORY_OPTIONS.find((opt) => opt.value === article.category)?.label ??
    article.category;

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
        <Link href="/articles" style={{ fontSize: "0.9rem" }}>
          ← 목록으로
        </Link>
        <div style={{ display: "flex", gap: 8 }}>
          <Link
            href={`/articles/${id}/edit`}
            style={{
              background: "#f3f4f6",
              color: "#374151",
              padding: "8px 20px",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.95rem",
            }}
          >
            수정
          </Link>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>

      <div
        style={{
          display: "inline-block",
          background: "#eff6ff",
          color: "#2563eb",
          fontSize: "0.8rem",
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 99,
          marginBottom: 12,
        }}
      >
        {categoryLabel}
      </div>

      <h1 style={{ marginTop: 0 }}>{article.title}</h1>

      <div style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: 24 }}>
        <span>{article.author}</span>
        <span style={{ margin: "0 8px" }}>·</span>
        <time>{new Date(article.createdAt).toLocaleDateString("ko-KR")}</time>
      </div>

      <p style={{ lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{article.content}</p>
    </main>
  );
}
