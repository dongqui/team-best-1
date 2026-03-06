import Link from "next/link";
import { Article } from "@/types/article";

type ArticleListItemProps = {
  article: Article;
};

export default function ArticleListItem({ article }: ArticleListItemProps) {
  const { id, category, title, author, createdAt } = article;
  return (
    <Link href={`/${id}`}>
      <div>{category}</div>
      <div>{title}</div>
      <div>
        {author} | {createdAt}
      </div>
      {/* TODO: `/articles/${article.id}`로 이동하는 Link를 렌더링하고, 게시글 제목을 표시하세요. */}
      {/* TODO: 게시글의 createdAt 날짜를 렌더링하세요. */}
    </Link>
  );
}
