import PostList, { Post } from "@/components/PostList";
import LikeButton from "@/components/LikeButton";

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>🧁 SSG - Static Site Generation</h1>
      <p>This page was built at build time using getStaticProps.</p>
      <LikeButton /> {/* 👈 Hydration required here */}
      <PostList posts={posts} />
    </div>
  );
}
