import { ArticleCategory } from "@/types/article";

export const CATEGORY_OPTIONS: { value: ArticleCategory; label: string }[] = [
  { value: "technology", label: "기술" },
  { value: "science", label: "과학" },
  { value: "culture", label: "문화" },
  { value: "sports", label: "스포츠" },
  { value: "economy", label: "경제" },
];
