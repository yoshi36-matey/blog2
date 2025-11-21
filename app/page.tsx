import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>My Blog</h1>
      <p>Markdown で書いた記事を読むブログです。</p>

      <Link href="/posts/first-post">
        最初の記事へ
      </Link>
    </main>
  );
}
