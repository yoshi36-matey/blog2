import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Blog",
  description: "Markdown で書くブログ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#fafafa" }}>
        <header
          style={{
            width: "100%",
            padding: "15px 20px",
            background: "black",
            color: "white",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px" }}>
            My Blog
          </Link>
        </header>

        <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
          {children}
        </main>

        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#777",
          }}
        >
          © 2025 My Blog
        </footer>
      </body>
    </html>
  );
}
