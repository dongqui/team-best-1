# Articles API 문서

Base URL: `/api/articles`

---

## 데이터 모델

### Article

| 필드        | 타입              | 설명                |
| ----------- | ----------------- | ------------------- |
| `id`        | `string`          | 고유 식별자         |
| `title`     | `string`          | 제목                |
| `content`   | `string`          | 내용                |
| `author`    | `string`          | 작성자              |
| `category`  | `ArticleCategory` | 카테고리            |
| `createdAt` | `string`          | 작성일시 (ISO 8601) |

### ArticleCategory

```
"technology" | "science" | "culture" | "sports" | "economy"
```

---

## 엔드포인트

### 목록 조회

```
GET /api/articles
```

게시글 목록을 검색·필터·정렬·페이지네이션하여 반환합니다.

**쿼리 파라미터**

| 파라미터   | 타입                       | 기본값        | 설명                                  |
| ---------- | -------------------------- | ------------- | ------------------------------------- |
| `keyword`  | `string`                   | —             | 제목 또는 내용 검색어 (대소문자 무시) |
| `category` | `ArticleCategory`          | —             | 카테고리 필터                         |
| `orderBy`  | `"createdAt"` \| `"title"` | `"createdAt"` | 정렬 기준 필드                        |
| `order`    | `"asc"` \| `"desc"`        | `"desc"`      | 정렬 방향                             |
| `page`     | `number`                   | `1`           | 페이지 번호                           |
| `pageSize` | `number`                   | `10`          | 페이지당 항목 수                      |

**요청 예시**

```
GET /api/articles?keyword=react&category=technology&orderBy=createdAt&order=desc&page=1&pageSize=5
```

**응답 `200 OK`**

```json
{
  "articles": [
    {
      "id": "1",
      "title": "Getting Started with React",
      "content": "React is a JavaScript library...",
      "author": "김철수",
      "category": "technology",
      "createdAt": "2025-01-01T00:00:00.000Z"
    }
  ],
  "totalCount": 1,
  "page": 1,
  "pageSize": 5,
  "totalPages": 1
}
```

---

### 단건 조회

```
GET /api/articles/:id
```

ID에 해당하는 게시글 하나를 반환합니다.

**응답 `200 OK`**

```json
{
  "id": "1",
  "title": "Getting Started with React",
  "content": "React is a JavaScript library...",
  "author": "김철수",
  "category": "technology",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

**응답 `404 Not Found`**

```json
{ "error": "Article not found" }
```

---

### 게시글 생성

```
POST /api/articles
```

새 게시글을 생성합니다.

**요청 헤더**

```
Content-Type: application/json
```

**요청 Body**

| 필드       | 타입              | 필수 | 설명     |
| ---------- | ----------------- | ---- | -------- |
| `title`    | `string`          | ✅   | 제목     |
| `content`  | `string`          | ✅   | 내용     |
| `author`   | `string`          | ✅   | 작성자   |
| `category` | `ArticleCategory` | ✅   | 카테고리 |

```json
{
  "title": "새 게시글 제목",
  "content": "게시글 내용입니다.",
  "author": "홍길동",
  "category": "technology"
}
```

**응답 `201 Created`**

```json
{
  "id": "1736000000000",
  "title": "새 게시글 제목",
  "content": "게시글 내용입니다.",
  "author": "홍길동",
  "category": "technology",
  "createdAt": "2025-01-04T12:00:00.000Z"
}
```

**응답 `400 Bad Request`** — 필수 필드 누락 시

```json
{ "error": "title, content, author, category are required" }
```

---

### 게시글 수정

```
PATCH /api/articles/:id
```

게시글의 일부 필드를 수정합니다. 전달한 필드만 업데이트됩니다.

**요청 헤더**

```
Content-Type: application/json
```

**요청 Body** (모든 필드 선택)

| 필드       | 타입              | 설명     |
| ---------- | ----------------- | -------- |
| `title`    | `string`          | 제목     |
| `content`  | `string`          | 내용     |
| `author`   | `string`          | 작성자   |
| `category` | `ArticleCategory` | 카테고리 |

```json
{
  "title": "수정된 제목",
  "category": "science"
}
```

**응답 `200 OK`** — 수정된 게시글 전체 반환

```json
{
  "id": "1",
  "title": "수정된 제목",
  "content": "React is a JavaScript library...",
  "author": "김철수",
  "category": "science",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

**응답 `404 Not Found`**

```json
{ "error": "Article not found" }
```

---

### 게시글 삭제

```
DELETE /api/articles/:id
```

ID에 해당하는 게시글을 삭제합니다.

**응답 `204 No Content`** — 응답 Body 없음

**응답 `404 Not Found`**

```json
{ "error": "Article not found" }
```

---

## 클라이언트 함수 (`lib/api/articles.ts`)

페이지 컴포넌트에서 직접 `fetch`를 호출하는 대신, 아래 함수들을 구현하여 사용합니다.

| 함수                      | 설명                                                          |
| ------------------------- | ------------------------------------------------------------- |
| `getArticles(query?)`     | 목록 조회. `GetArticlesQuery`를 쿼리 파라미터로 변환하여 전송 |
| `getArticle(id)`          | 단건 조회                                                     |
| `createArticle(data)`     | 게시글 생성                                                   |
| `updateArticle(id, data)` | 게시글 수정                                                   |
| `deleteArticle(id)`       | 게시글 삭제                                                   |
