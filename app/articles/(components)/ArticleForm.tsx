"use client";

import { useState } from "react";
import { Article } from "@/types/article";

type ArticleFormProps = {
  onSubmit: (data: { title: string; content: string }) => void;
};

export default function ArticleForm({ onSubmit }: ArticleFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: 현재 title과 content 값을 담아 onSubmit을 호출하세요.
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>제목</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <div>
        <label>내용</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <div>
        <label>작성자</label>
        <input type="text" />
      </div>
      {/* TODO: "title" 입력을 위한 label과 input을 렌더링하세요. value를 title 상태에 연결하세요. */}
      {/* TODO: "content" 입력을 위한 label과 textarea를 렌더링하세요. value를 content 상태에 연결하세요. */}
      {/* TODO: "author" 입력을 위한 label과 input을 렌더링하세요. value를 author 상태에 연결하세요. */}
      {/* TODO: "category" 입력을 위한 label과 select를 렌더링하세요. value를 category 상태에 연결하세요. */}

      {/* TODO: 제출(submit) 버튼을 렌더링하세요. */}
    </form>
  );
}
