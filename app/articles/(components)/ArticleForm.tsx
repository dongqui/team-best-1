"use client";

import { useState } from "react";
import { Article } from "@/types/article";
import { createArticle } from "@/lib/api/articles";
import { useRouter } from "next/navigation";

type ArticleFormProps = {
  onSubmit: (data: { title: string; content: string }) => void;
};

export default function ArticleForm({ onSubmit }: ArticleFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("free");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: 현재 title과 content 값을 담아 onSubmit을 호출하세요.
    createArticle({ title, content, author, category });
    router.push("/articles");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: "title" 입력을 위한 label과 input을 렌더링하세요. value를 title 상태에 연결하세요. */}
      <div>
        <label>제목</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* TODO: "content" 입력을 위한 label과 textarea를 렌더링하세요. value를 content 상태에 연결하세요. */}
      <div>
        <label>내용</label>
        <textarea 
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* TODO: "author" 입력을 위한 label과 input을 렌더링하세요. value를 author 상태에 연결하세요. */}
      <div>
        <label>작성자</label>
        <input 
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      {/* TODO: "category" 입력을 위한 label과 select를 렌더링하세요. value를 category 상태에 연결하세요. */}
      <div>
        <label>카테고리</label>
        <select 
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">카테고리 선택</option>
          <option value="free">자유 게시판</option>
          <option value="notice">공지사항</option>
        </select>
      </div>

      {/* TODO: 제출(submit) 버튼을 렌더링하세요. */}
      <button type="submit">
        제출
      </button>
    </form>
  );
}
