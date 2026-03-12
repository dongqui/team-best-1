"use client";
import { useState } from "react";
import styles from "./ArticleForm.module.css";
import { createArticle } from "@/lib/api/articles";
import { useRouter } from "next/navigation";

type ArticleFormProps = {
  onSubmit: (data: { title: string; content: string }) => void;
};

export default function ArticleForm({ onSubmit }: ArticleFormProps) {
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await createArticle({
      title: titleValue,
      content: contentValue,
      category: categoryValue,
      author: authorValue,
    });
    router.push("/articles");
    // TODO: 현재 title과 content 값을 담아 onSubmit을 호출하세요.
  }
  const [categoryValue, setCategoryValue] = useState("기술");
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.categoryWrap}>
        <label>카테고리</label>
        <select
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="technology">technology</option>
          <option value="science">science</option>
          <option value="culture">culture</option>
          <option value="sports">sports</option>
          <option value="economy">economy</option>
        </select>
      </div>
      <div className={styles.titleWrap}>
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </div>

      <div className={styles.contentWrap}>
        <label>내용</label>
        <textarea
          placeholder="내용을 입력해주세요."
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />
      </div>
      <div className={styles.authorWrap}>
        <label>글쓴이</label>
        <input
          type="text"
          placeholder="글쓴이를 입력해주세요."
          value={authorValue}
          onChange={(e) => setAuthorValue(e.target.value)}
        />
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
