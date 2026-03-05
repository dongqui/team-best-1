export const ARTICLE_CATEGORIES = [
  "technology",
  "science",
  "culture",
  "sports",
  "economy",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export type Article = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: ArticleCategory;
  createdAt: string;
};

// GET /api/articles 쿼리 파라미터
export type GetArticlesQuery = {
  keyword?: string;       // 제목/내용 검색
  category?: ArticleCategory;
  orderBy?: "createdAt" | "title";
  order?: "asc" | "desc";
  page?: number;
  pageSize?: number;
};

// GET /api/articles 응답 타입
export type ArticleListResponse = {
  articles: Article[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
};
