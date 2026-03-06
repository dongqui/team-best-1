import {
  Article,
  ArticleListResponse,
  GetArticlesQuery,
} from "@/types/article";

export const ARTICLE_API = "/api/articles";

/**
 * TODO: 전체 게시글 목록을 가져옵니다.
 * - query 객체의 각 항목을 URL 쿼리 파라미터로 변환합니다.
 *   (예: { keyword: "react", page: 1 } → "?keyword=react&page=1")
 * - ARTICLE_API + 쿼리 파라미터로 GET 요청을 보냅니다.
 * - 응답을 JSON으로 파싱합니다.
 * - ArticleListResponse 타입의 객체를 반환합니다.
 *
 * 지원하는 쿼리 파라미터:
 *   keyword   - 제목/내용 검색어
 *   category  - 카테고리 필터
 *   orderBy   - 정렬 기준 ("createdAt" | "title")
 *   order     - 정렬 방향 ("asc" | "desc")
 *   page      - 페이지 번호 (기본값: 1)
 *   pageSize  - 페이지당 항목 수 (기본값: 10)
 */
export async function getArticles(
  _query: GetArticlesQuery = {},
): Promise<ArticleListResponse> {
  const res = await fetch(ARTICLE_API);
  return res.json();

  // throw new Error("getArticles()가 아직 구현되지 않았습니다");
}

/**
 * TODO: ID로 게시글 하나를 가져옵니다.
 * - `${ARTICLE_API}/${id}`로 GET 요청을 보냅니다.
 * - 응답을 JSON으로 파싱합니다.
 * - 게시글을 반환합니다.
 */
export async function getArticle(_id: string): Promise<Article> {
  throw new Error("getArticle()이 아직 구현되지 않았습니다");
}

/**
 * TODO: 새 게시글을 생성합니다.
 * - ARTICLE_API로 POST 요청을 보냅니다.
 * - Content-Type 헤더를 "application/json"으로 설정합니다.
 * - title, content, author, category를 요청 body에 포함합니다 (JSON.stringify 사용).
 * - 응답을 JSON으로 파싱합니다.
 * - 생성된 게시글을 반환합니다.
 */
export async function createArticle(_data: {
  title: string;
  content: string;
  author: string;
  category: string;
}): Promise<Article> {
  throw new Error("createArticle()이 아직 구현되지 않았습니다");
}

/**
 * TODO: 게시글을 수정합니다.
 * - `${ARTICLE_API}/${id}`로 PATCH 요청을 보냅니다.
 * - Content-Type 헤더를 "application/json"으로 설정합니다.
 * - 수정할 필드를 요청 body에 포함합니다 (JSON.stringify 사용).
 * - 응답을 JSON으로 파싱합니다.
 * - 수정된 게시글을 반환합니다.
 */
export async function updateArticle(
  _id: string,
  _data: {
    title?: string;
    content?: string;
    author?: string;
    category?: string;
  },
): Promise<Article> {
  throw new Error("updateArticle()이 아직 구현되지 않았습니다");
}

/**
 * TODO: 게시글을 삭제합니다.
 * - `${ARTICLE_API}/${id}`로 DELETE 요청을 보냅니다.
 * - 반환값은 없습니다.
 */
export async function deleteArticle(_id: string): Promise<void> {
  throw new Error("deleteArticle()이 아직 구현되지 않았습니다");
}
