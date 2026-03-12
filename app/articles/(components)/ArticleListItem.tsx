import Link from "next/link";
import { Article } from "@/types/article";

type ArticleListItemProps = {
  article: Article;
};

export default function ArticleListItem({ article }: ArticleListItemProps) {
  return (
    <>
      <Link href={`/articles/${article.id}`}>
        {/* TODO: `/articles/${article.id}`로 이동하는 Link를 렌더링하고, 게시글 제목을 표시하세요. */}
        {/* TODO: 게시글의 createdAt 날짜를 렌더링하세요. */}
        <p>{article.title}</p>
        <p>{article.content}</p>
        <p>{article.createdAt}</p>
        <p>{article.category}</p>
        <p>{article.author}</p>
      </Link>
    </>
  );
}
