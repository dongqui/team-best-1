import { Article, ArticleCategory } from "@/types/article";

// In-memory database — data resets whenever the dev server restarts.
const articles: Article[] = [
  {
    id: "1",
    title: "Getting Started with React",
    content:
      "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.",
    author: "김철수",
    category: "technology",
    createdAt: new Date("2025-01-01").toISOString(),
  },
  {
    id: "2",
    title: "Understanding CRUD Operations",
    content:
      "CRUD stands for Create, Read, Update, and Delete. These four operations are the foundation of most data-driven applications.",
    author: "이영희",
    category: "technology",
    createdAt: new Date("2025-01-02").toISOString(),
  },
  {
    id: "3",
    title: "The Future of Science",
    content:
      "Modern science is advancing rapidly. From quantum computing to gene editing, the next decade promises extraordinary breakthroughs.",
    author: "박민준",
    category: "science",
    createdAt: new Date("2025-01-03").toISOString(),
  },
  {
    id: "4",
    title: "Korean Pop Culture Goes Global",
    content:
      "K-pop and Korean dramas have captured audiences worldwide, reshaping how we think about cultural exports.",
    author: "최수아",
    category: "culture",
    createdAt: new Date("2025-01-04").toISOString(),
  },
  {
    id: "5",
    title: "Champions League Highlights",
    content:
      "This season's Champions League has delivered some of the most dramatic matches in recent memory.",
    author: "정다은",
    category: "sports",
    createdAt: new Date("2025-01-05").toISOString(),
  },
];

export function getAll(): Article[] {
  return articles;
}

export function getById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function create(data: {
  title: string;
  content: string;
  author: string;
  category: ArticleCategory;
}): Article {
  const article: Article = {
    id: String(Date.now()),
    title: data.title,
    content: data.content,
    author: data.author,
    category: data.category,
    createdAt: new Date().toISOString(),
  };
  articles.push(article);
  return article;
}

export function update(
  id: string,
  data: {
    title?: string;
    content?: string;
    author?: string;
    category?: ArticleCategory;
  }
): Article | undefined {
  const index = articles.findIndex((a) => a.id === id);
  if (index === -1) return undefined;
  articles[index] = { ...articles[index], ...data };
  return articles[index];
}

export function remove(id: string): boolean {
  const index = articles.findIndex((a) => a.id === id);
  if (index === -1) return false;
  articles.splice(index, 1);
  return true;
}
