import React from "react";

const index = () => {
  return (
    <div>
      Change the URL to see the different rendering methods: Use{" "}
      <a href="/ssg">SSG</a> for static content, <a href="/ssr">SSR</a> for
      dynamic content, and <a href="/csr">CSR</a> for client-side rendering.
    </div>
  );
};

export default index;
