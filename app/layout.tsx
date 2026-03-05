import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Articles CRUD",
  description: "Next.js CRUD practice project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
