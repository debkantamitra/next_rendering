import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      style={{ padding: "8px 16px", fontSize: "16px" }}
    >
      👍 Like {count}
    </button>
  );
}
