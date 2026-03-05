import {
  Article,
  ArticleCategory,
  ArticleListResponse,
  GetArticlesQuery,
} from "@/types/article";

export const ARTICLE_API = "/api/articles";

export async function getArticles(
  query: GetArticlesQuery = {}
): Promise<ArticleListResponse> {
  const params = new URLSearchParams();
  if (query.keyword) params.set("keyword", query.keyword);
  if (query.category) params.set("category", query.category);
  if (query.orderBy) params.set("orderBy", query.orderBy);
  if (query.order) params.set("order", query.order);
  if (query.page !== undefined) params.set("page", String(query.page));
  if (query.pageSize !== undefined) params.set("pageSize", String(query.pageSize));

  const res = await fetch(`${ARTICLE_API}?${params.toString()}`);
  return res.json();
}

export async function getArticle(id: string): Promise<Article> {
  const res = await fetch(`${ARTICLE_API}/${id}`);
  return res.json();
}

export async function createArticle(data: {
  title: string;
  content: string;
  author: string;
  category: ArticleCategory;
}): Promise<Article> {
  const res = await fetch(ARTICLE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateArticle(
  id: string,
  data: {
    title?: string;
    content?: string;
    author?: string;
    category?: ArticleCategory;
  }
): Promise<Article> {
  const res = await fetch(`${ARTICLE_API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteArticle(id: string): Promise<void> {
  await fetch(`${ARTICLE_API}/${id}`, { method: "DELETE" });
}
