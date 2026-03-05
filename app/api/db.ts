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
    author: "한지호",
    category: "sports",
    createdAt: new Date("2025-01-05").toISOString(),
  },
  {
    id: "6",
    title: "TypeScript 기초 완전 정복",
    content:
      "TypeScript는 JavaScript에 타입 시스템을 더한 언어입니다. 정적 타입 검사를 통해 버그를 사전에 방지할 수 있습니다.",
    author: "김철수",
    category: "technology",
    createdAt: new Date("2025-01-06").toISOString(),
  },
  {
    id: "7",
    title: "글로벌 경제 전망 2025",
    content:
      "2025년 세계 경제는 금리 인하와 AI 산업 성장에 힘입어 완만한 회복세를 보일 것으로 전망됩니다.",
    author: "오승훈",
    category: "economy",
    createdAt: new Date("2025-01-07").toISOString(),
  },
  {
    id: "8",
    title: "Next.js App Router 완벽 가이드",
    content:
      "Next.js 13부터 도입된 App Router는 React Server Components를 기반으로 한 새로운 라우팅 시스템입니다.",
    author: "이영희",
    category: "technology",
    createdAt: new Date("2025-01-08").toISOString(),
  },
  {
    id: "9",
    title: "기후 변화와 재생에너지의 미래",
    content:
      "태양광·풍력 발전 비용이 급격히 낮아지면서 재생에너지가 화석연료를 대체할 현실적인 대안으로 부상하고 있습니다.",
    author: "박민준",
    category: "science",
    createdAt: new Date("2025-01-09").toISOString(),
  },
  {
    id: "10",
    title: "파리 올림픽 결산",
    content:
      "2024 파리 올림픽은 역대 최다 국가 참가 기록을 세우며 성황리에 마무리됐습니다. 한국은 금메달 13개로 종합 8위를 기록했습니다.",
    author: "한지호",
    category: "sports",
    createdAt: new Date("2025-01-10").toISOString(),
  },
  {
    id: "11",
    title: "스트리밍 전쟁의 승자는?",
    content:
      "넷플릭스·디즈니+·애플TV+가 치열하게 경쟁하는 가운데, 오리지널 콘텐츠 투자 규모가 플랫폼 생존의 열쇠가 되고 있습니다.",
    author: "최수아",
    category: "culture",
    createdAt: new Date("2025-01-11").toISOString(),
  },
  {
    id: "12",
    title: "React Query로 서버 상태 관리하기",
    content:
      "React Query는 서버 데이터를 캐싱·동기화·업데이트하는 강력한 라이브러리입니다. 직접 useEffect로 fetch하는 방식보다 훨씬 편리합니다.",
    author: "오승훈",
    category: "technology",
    createdAt: new Date("2025-01-12").toISOString(),
  },
  {
    id: "13",
    title: "반도체 산업의 현재와 미래",
    content:
      "AI 수요 급증으로 고대역폭 메모리(HBM) 시장이 폭발적으로 성장하고 있으며, 한국 반도체 기업들이 핵심 공급자로 주목받고 있습니다.",
    author: "이영희",
    category: "economy",
    createdAt: new Date("2025-01-13").toISOString(),
  },
  {
    id: "14",
    title: "손흥민의 EPL 시즌 분석",
    content:
      "토트넘의 주장 손흥민은 이번 시즌 15골 10어시스트를 기록하며 팀의 유럽 진출에 핵심 역할을 했습니다.",
    author: "한지호",
    category: "sports",
    createdAt: new Date("2025-01-14").toISOString(),
  },
  {
    id: "15",
    title: "CSS Grid vs Flexbox 완벽 비교",
    content:
      "Grid는 2차원 레이아웃에, Flexbox는 1차원 정렬에 최적화되어 있습니다. 두 기술을 상황에 맞게 조합하는 것이 핵심입니다.",
    author: "김철수",
    category: "technology",
    createdAt: new Date("2025-01-15").toISOString(),
  },
  {
    id: "16",
    title: "뮤지컬 '오페라의 유령' 내한 공연 후기",
    content:
      "브로드웨이 원작팀이 직접 참여한 이번 내한 공연은 압도적인 무대 연출과 배우들의 열연으로 관객들을 사로잡았습니다.",
    author: "최수아",
    category: "culture",
    createdAt: new Date("2025-01-16").toISOString(),
  },
  {
    id: "17",
    title: "양자 컴퓨팅이 바꿀 세상",
    content:
      "구글과 IBM이 양자 우월성 달성을 선언하면서 암호화·신약 개발·최적화 문제 풀이에 혁명적 변화가 예고되고 있습니다.",
    author: "박민준",
    category: "science",
    createdAt: new Date("2025-01-17").toISOString(),
  },
  {
    id: "18",
    title: "부동산 시장 2025 전망",
    content:
      "금리 인하 기대감에도 불구하고 공급 부족과 전세 불안이 지속되면서 수도권 부동산 시장은 당분간 관망세를 유지할 전망입니다.",
    author: "오승훈",
    category: "economy",
    createdAt: new Date("2025-01-18").toISOString(),
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
