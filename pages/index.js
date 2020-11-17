import Layout from "./components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";
import slug from "slug";

function HomePage({ characters }) {
  return (
    <Layout title="Home">
      {/* scope css */}
      <style jsx>
        {`
          li {
            color: white;
          }
        `}
      </style>
      {/* global css */}
      {/* <style global jsx>
        {`
          body {
            background-color: green;
          }
        `}
      </style> */}
      <h1>Welcome to Next.js!</h1>
      <ul>
        {characters?.results?.map((chr, i) => (
          <li key={chr.id}>
            {" "}
            <Link
              href="/character/[slug]"
              as={`/character/${slug(chr.name)}-${chr.id}`}
            >
              <a>{chr.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  // data fetch server tarafında calışıyor:

  const res = await unfetch("https://rickandmortyapi.com/api/character/");

  const data = await res.json();
  // console.log(data);

  return {
    props: {
      characters: data,
    },
  };
}

export default HomePage;
