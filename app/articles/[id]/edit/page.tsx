"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Article, ArticleCategory } from "@/types/article";
import ArticleForm from "@/app/articles/(components)/ArticleForm";
import { getArticle, updateArticle } from "@/lib/api/articles";

export default function ArticleEditPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    getArticle(id).then((data) => setArticle(data));
  }, [id]);

  async function handleSubmit(data: {
    title: string;
    content: string;
    author: string;
    category: ArticleCategory;
  }) {
    await updateArticle(id, data);
    router.push(`/articles/${id}`);
  }

  if (!article) return <main><p>Loading...</p></main>;

  return (
    <main>
      <Link href={`/articles/${id}`} style={{ fontSize: "0.9rem" }}>
        ← 상세로
      </Link>
      <h1 style={{ marginTop: 16 }}>게시글 수정</h1>
      <ArticleForm initialData={article} onSubmit={handleSubmit} />
    </main>
  );
}
