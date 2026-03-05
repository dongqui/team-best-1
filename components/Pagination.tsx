"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const WINDOW = 2; // 현재 페이지 양쪽으로 보여줄 페이지 수

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  function goTo(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.replace(`/articles?${params.toString()}`);
  }

  // 보여줄 페이지 번호 목록 계산
  const pages: (number | "...")[] = [];
  const start = Math.max(1, currentPage - WINDOW);
  const end = Math.min(totalPages, currentPage + WINDOW);

  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 36,
    height: 36,
    padding: "0 10px",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    background: "#fff",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#374151",
  };

  const btnActive: React.CSSProperties = {
    ...btnBase,
    background: "#2563eb",
    borderColor: "#2563eb",
    color: "#fff",
    cursor: "default",
  };

  const btnDisabled: React.CSSProperties = {
    ...btnBase,
    color: "#d1d5db",
    cursor: "not-allowed",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        marginTop: 32,
      }}
    >
      {/* 이전 */}
      <button
        type="button"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        style={currentPage === 1 ? btnDisabled : btnBase}
      >
        ‹
      </button>

      {/* 페이지 번호 */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} style={{ padding: "0 4px", color: "#9ca3af" }}>
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => goTo(p as number)}
            style={p === currentPage ? btnActive : btnBase}
          >
            {p}
          </button>
        )
      )}

      {/* 다음 */}
      <button
        type="button"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={currentPage === totalPages ? btnDisabled : btnBase}
      >
        ›
      </button>
    </div>
  );
}
