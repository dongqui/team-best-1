"use client";

import { useState } from "react";
import { Article, ArticleCategory } from "@/types/article";
import { CATEGORY_OPTIONS } from "@/app/articles/(constrnats)";

type ArticleFormData = {
  title: string;
  content: string;
  author: string;
  category: ArticleCategory;
};

type ArticleFormProps = {
  initialData?: Article;
  onSubmit: (data: ArticleFormData) => void;
};

export default function ArticleForm({ initialData, onSubmit }: ArticleFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "");
  const [category, setCategory] = useState<ArticleCategory>(
    initialData?.category ?? "technology"
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ title, content, author, category });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        내용
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <label>
        작성자
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </label>

      <label>
        카테고리
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ArticleCategory)}
        >
          {CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">저장</button>
    </form>
  );
}
