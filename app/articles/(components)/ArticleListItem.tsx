import Link from "next/link";
import { Article } from "@/types/article";

type ArticleListItemProps = {
  article: Article;
};

export default function ArticleListItem({ article }: ArticleListItemProps) {
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "16px 0" }}>
      <Link href={`/articles/${article.id}`}>{article.title}</Link>
      <div style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: 4 }}>
        <span>{article.author}</span>
        <span style={{ margin: "0 8px" }}>·</span>
        <time>{new Date(article.createdAt).toLocaleDateString("ko-KR")}</time>
      </div>
    </div>
  );
}
