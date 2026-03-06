import Link from "next/link";
import { Article } from "@/types/article";
import ArticleList from "@/app/articles/(components)/ArticleList";
import { getArticles } from "@/lib/api/articles";

export default async function ArticleListPage() {
  const articlesList = await getArticles();
  console.log("articles", articlesList);
  const articles = articlesList.articles;
  // TODO: getArticles()를 호출하고, 반환된 결과로 articles 상태를 업데이트하세요.
  // 예시:
  //   getArticles().then((data) => setArticles(data));

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1 style={{ margin: 0 }}>Articles</h1>
        <Link
          href="/articles/new"
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          + 게시글 작성
        </Link>
      </div>

      {articles.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>
              {item.author} | {item.category}{" "}
            </div>
            <div>{item.createdAt}</div>
          </div>
        );
      })}
    </main>
  );
}
