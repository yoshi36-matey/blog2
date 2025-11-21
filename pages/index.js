import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              {title}（{date}）
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
