"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ArticleForm from "@/app/articles/(components)/ArticleForm";
import { updateArticle } from "@/lib/api/articles";

export default function ArticleEditPage() {
  const router = useRouter();

  const { id } = useParams();

  async function handleSubmit(data: {
    title: string;
    content: string;
    author: string;
    category: string;
  }) {
    // TODO: createArticle(data)를 호출해서 새 게시글을 생성하세요.
    // TODO: 생성 완료 후 router.push("/articles")로 목록 페이지로 이동하세요.
    await updateArticle(id, data);
    router.push(`/articles/${id}`);
  }

  return (
    <main>
      <Link href={`/articles/${id}`} style={{ fontSize: "0.9rem" }}>
        ← 목록으로
      </Link>
      <h1 style={{ marginTop: 16 }}>게시글 작성</h1>
      <ArticleForm onSubmit={handleSubmit} />
    </main>
  );
}
