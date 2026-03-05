"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORY_OPTIONS } from "@/app/articles/(constrnats)";

const SORT_OPTIONS: {
  label: string;
  orderBy: "createdAt" | "title";
  order: "asc" | "desc";
}[] = [
  { label: "최신순", orderBy: "createdAt", order: "desc" },
  { label: "오래된순", orderBy: "createdAt", order: "asc" },
  { label: "제목 A→Z", orderBy: "title", order: "asc" },
  { label: "제목 Z→A", orderBy: "title", order: "desc" },
];

function toSortKey(orderBy: string, order: string) {
  return `${orderBy}_${order}`;
}

const DEBOUNCE_MS = 400;

export default function ArticleListHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("keyword") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [sortKey, setSortKey] = useState(
    toSortKey(
      searchParams.get("orderBy") ?? "createdAt",
      searchParams.get("order") ?? "desc"
    )
  );

  function buildParams(overrides: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(overrides).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    params.set("page", "1");
    return params.toString();
  }

  // keyword 디바운스 → URL 업데이트
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(`/articles?${buildParams({ keyword, category })}`);
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  function handleCategoryChange(value: string) {
    setCategory(value);
    router.replace(`/articles?${buildParams({ keyword, category: value })}`);
  }

  function handleSortChange(value: string) {
    setSortKey(value);
    const [orderBy, order] = value.split("_");
    router.replace(
      `/articles?${buildParams({ keyword, category, orderBy, order })}`
    );
  }

  // 뒤로 가기 등 URL 외부 변경 시 로컬 상태 동기화
  useEffect(() => {
    setKeyword(searchParams.get("keyword") ?? "");
    setCategory(searchParams.get("category") ?? "");
    setSortKey(
      toSortKey(
        searchParams.get("orderBy") ?? "createdAt",
        searchParams.get("order") ?? "desc"
      )
    );
  }, [searchParams]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 24,
        alignItems: "center",
      }}
    >
      {/* 검색 */}
      <input
        type="text"
        placeholder="제목 또는 내용 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ flex: "1 1 240px" }}
      />

      {/* 카테고리 필터 */}
      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        style={{ width: "auto", flex: "0 0 auto" }}
      >
        <option value="">전체 카테고리</option>
        {CATEGORY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* 정렬 */}
      <select
        value={sortKey}
        onChange={(e) => handleSortChange(e.target.value)}
        style={{ width: "auto", flex: "0 0 auto" }}
      >
        {SORT_OPTIONS.map((opt) => {
          const key = toSortKey(opt.orderBy, opt.order);
          return (
            <option key={key} value={key}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
