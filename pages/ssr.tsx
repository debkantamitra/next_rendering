import PostList, { Post } from "@/components/PostList";

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

      <PostList posts={posts} />
    </div>
  );
}
