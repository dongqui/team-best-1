"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Article } from "@/types/article";
import ArticleForm from "@/app/articles/(components)/ArticleForm";

import { getArticle, deleteArticle, updateArticle } from "@/lib/api/articles";
// TODO: import { getArticle, updateArticle, deleteArticle } from "@/lib/api/articles";

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // TODO: getArticle(id)를 호출하고, 반환된 결과로 article 상태를 업데이트하세요.
    async function fetchArticle(id: string) {
      const articleDate = await getArticle(id);
      setArticle(articleDate);
    }
    fetchArticle(id);
  }, [id]);

  async function handleUpdate(data: { title: string; content: string }) {
    // TODO: updateArticle(id, data)를 호출해서 게시글을 수정하세요.
    // TODO: 반환된 게시글로 article 상태를 업데이트하세요.
  }

  async function handleDelete() {
    // TODO: deleteArticle(id)를 호출해서 게시글을 삭제하세요.
    // TODO: 삭제 완료 후 router.push("/articles")로 목록 페이지로 이동하세요.
    await deleteArticle(id);
    router.push("/articles");
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

        <div className="flex gap-2">
          <Link type="button" href={`./${id}/edit`}>
            수정
          </Link>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
      <div>
        <p>{article?.category}</p>
        <h2>{article?.title}</h2>
        <p>
          {article?.author} | {article?.createdAt}
        </p>
        <p>{article?.content}</p>
      </div>
    </main>
  );
}
