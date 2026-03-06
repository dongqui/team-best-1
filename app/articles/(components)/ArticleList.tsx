import { Article } from "@/types/article";
import ArticleListItem from "./ArticleListItem";

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {/* TODO: articles 배열의 각 게시글마다 ArticleListItem을 렌더링하세요. */}
      {/* 힌트: articles.map((article) => <ArticleListItem key={article.id} article={article} />) */}
      {articles.map((article) => (
        <ArticleListItem key
      ))}
    </div>
  );
}
