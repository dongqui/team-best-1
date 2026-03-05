import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Articles CRUD Practice</h1>
      <Link href="/articles">Go to Articles</Link>
    </main>
  );
}
