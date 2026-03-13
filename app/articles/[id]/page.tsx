"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Article } from "@/types/article";
import ArticleForm from "@/app/articles/(components)/ArticleForm";

import { getArticle } from "@/lib/api/articles";
// TODO: import { getArticle, updateArticle, deleteArticle } from "@/lib/api/articles";

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [article, setArticle] = useState({});

  useEffect(() => {
    // TODO: getArticle(id)를 호출하고, 반환된 결과로 article 상태를 업데이트하세요.
    async function getArticle(id) {
      const articleFetch = await getArticle(id);
      console.log("article", article);
      setArticle(articleFetch);
    }
  }, [id]);

  async function handleUpdate(data: { title: string; content: string }) {
    // TODO: updateArticle(id, data)를 호출해서 게시글을 수정하세요.
    // TODO: 반환된 게시글로 article 상태를 업데이트하세요.
  }

  async function handleDelete() {
    // TODO: deleteArticle(id)를 호출해서 게시글을 삭제하세요.
    // TODO: 삭제 완료 후 router.push("/articles")로 목록 페이지로 이동하세요.
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
          <button type="button" onClick={handleDelete}>
            수정
          </button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
      <div>{/* <h2>{article}</h2> */}</div>
    </main>
  );
}
