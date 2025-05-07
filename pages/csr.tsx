import { useEffect, useState } from "react";
import PostList, { Post } from "@/components/PostList";

export default function CSRPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>🎨 CSR - Client-Side Rendering</h1>
      <p>This page fetches data in the browser using useEffect.</p>

      {loading ? <p>Loading posts...</p> : <PostList posts={posts} />}
    </div>
  );
}
