"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import ArticleForm from "@/app/articles/(components)/ArticleForm";
import { createArticle } from "@/lib/api/articles";
import { ArticleCategory } from "@/types/article";

export default function ArticleCreatePage() {
  const router = useRouter();

  async function handleSubmit(data: {
    title: string;
    content: string;
    author: string;
    category: ArticleCategory;
  }) {
    await createArticle(data);
    router.push("/articles");
  }

  return (
    <main>
      <Link href="/articles" style={{ fontSize: "0.9rem" }}>
        ← 목록으로
      </Link>
      <h1 style={{ marginTop: 16 }}>게시글 작성</h1>
      <ArticleForm onSubmit={handleSubmit} />
    </main>
  );
}
