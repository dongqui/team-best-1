"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Article } from "@/types/article";
import ArticleForm from "@/app/articles/(components)/ArticleForm";
import { deleteArticle, getArticle } from "@/lib/api/articles";
// TODO: import { getArticle, updateArticle, deleteArticle } from "@/lib/api/articles";

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    
  }, [id]);

  async function handleUpdate() {
    
  }

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
        
        <div>{article?.title}</div>
        <div>{article?.content}</div>
        <div>{article?.author}</div>
        <div>{article?.category}</div>
        <div>{article?.createdAt}</div>

        <div className="flex gap-2">
          <Link href={`/articles/${id}/edit`}>수정</Link>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </main>
  );
}
