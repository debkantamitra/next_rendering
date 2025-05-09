import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      Change the URL to see the different rendering methods: Use{" "}
      <Link href="/ssg">SSG</Link> for static content,{" "}
      <Link href="/ssr">SSR</Link> for dynamic content, and{" "}
      <Link href="/csr">CSR</Link> for client-side rendering.
    </div>
  );
};

export default index;
