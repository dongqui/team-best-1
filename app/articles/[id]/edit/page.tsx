"use client";
import { useState, useEffect } from "react";
import { createArticle, getArticle } from "@/lib/api/articles";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";

type ArticleFormProps = {
  onSubmit: (data: { title: string; content: string }) => void;
};

export default function EditArticleForm({ onSubmit }: ArticleFormProps) {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    async function fetchArticle(id: string) {
      const articleDate = await getArticle(id);
      setArticle(articleDate);
    }
    fetchArticle(id);
  }, [id]);

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
    <>
      <h2>게시글 수정</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.categoryWrap}>
          <label>카테고리</label>
          <select
            value={article?.category}
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
            value={article?.title}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>

        <div className={styles.contentWrap}>
          <label>내용</label>
          <textarea
            placeholder="내용을 입력해주세요."
            value={article?.content}
            onChange={(e) => setContentValue(e.target.value)}
          />
        </div>
        <div className={styles.authorWrap}>
          <label>글쓴이</label>
          <input
            type="text"
            placeholder="글쓴이를 입력해주세요."
            value={article?.author}
            onChange={(e) => setAuthorValue(e.target.value)}
          />
        </div>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
