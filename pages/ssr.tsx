import PostList, { Post } from "@/components/PostList";
import LikeButton from "@/components/LikeButton";

export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
}

export default function SSRPage({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h1>🍳 SSR - Server-Side Rendering</h1>
      <p>This page is rendered on every request using getServerSideProps.</p>
      <LikeButton /> {/* 👈 Hydration required here */}
      <PostList posts={posts} />
    </div>
  );
}
