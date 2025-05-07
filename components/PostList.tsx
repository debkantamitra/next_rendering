export type Post = {
  id: number;
  title: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul style={{ padding: "24px" }}>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
