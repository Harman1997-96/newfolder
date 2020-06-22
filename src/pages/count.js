import fetch from "node-fetch";
import Link from "next/link";

const StargazerCount = ({ stars }) => (
  <div>
    <h2>getInitialProps</h2>
    Next.js Stars:{stars}
    <br />
    <Link href="/posts">
      <a>Posts</a>
    </Link>
  </div>
);
StargazerCount.getInitialProps = async () => {
  const res = await fetch(`https://api.github.com/repos/zeit/next.js`);
  const { Stargazer_count } = await res.json();
  return {
    stars: Stargazer_count,
  };
};

export default StargazerCount;
