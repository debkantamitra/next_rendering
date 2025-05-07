A simple Next.js project that demonstrates **three types of rendering**:

- 🧁 Static Site Generation (SSG)
- 🍳 Server-Side Rendering (SSR)
- 🎨 Client-Side Rendering (CSR)

Built with **Next.js + TypeScript**, using mock data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🚀 Live Routes

| Route         | Rendering Method         | Description                                      |
|---------------|--------------------------|--------------------------------------------------|
| `/ssg`        | Static Site Generation   | Built at build time with `getStaticProps()`      |
| `/ssr`        | Server-Side Rendering    | Rendered on every request via `getServerSideProps()` |
| `/csr`        | Client-Side Rendering    | Data is fetched in the browser using `useEffect()` |

---

