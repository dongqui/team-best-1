import Link from "next/link";
import { Article } from "@/types/article";
import styles from "./ArticleListItem.module.css";

type ArticleListItemProps = {
  article: Article;
};

export default function ArticleListItem({ article }: ArticleListItemProps) {
  const { id, category, title, author, createdAt } = article;
  return (
    <>
      <div className={styles.articleCategory}>{category}</div>
      <div className={styles.articleTitle}>
        <Link href={`/articles/${id}`} className={styles.article}>
          {title}
        </Link>
      </div>
      <div className={styles.articleAuthorDate}>
        <span className={styles.articleAuthor}>{author}</span> |{" "}
        <span className={styles.articleDate}>{createdAt}</span>
      </div>
    </>
  );
}
