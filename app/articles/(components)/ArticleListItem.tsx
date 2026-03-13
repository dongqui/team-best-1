import Link from "next/link";
import { Article } from "@/types/article";

type ArticleListItemProps = {
  article: Article;
};

export default function ArticleListItem({ article }: ArticleListItemProps) {
  return (
    <>
      {/* TODO: `/articles/${article.id}`로 이동하는 Link를 렌더링하고, 게시글 제목을 표시하세요. */}
      <Link href={`/articles/${article.id}`}>
        <h3>{article.title}</h3>
      </Link>
      {/* TODO: 게시글의 createdAt 날짜를 렌더링하세요. */}
      <p>
        [{article.category}] 작성자: {article.author} | 작성일: {new Date(article.createdAt).toLocaleDateString()}
      </p>
    </>
  );
}
