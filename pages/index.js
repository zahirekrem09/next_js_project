import Layout from "./components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";
import slug from "slug";
import Card from "./components/Card";
import CardList from "./components/CardList";

function HomePage({ characters }) {
  return (
    <Layout title="Home">
      {/* scope css */}
      <style jsx>
        {`
          h1 {
            margin-top: 30px;
            color: rgb(32, 35, 41);
            border: none;
            font-weight: 900;
            z-index: 1;
            font-size: 5.625rem;
            text-align: center;
            transition: 0.2s;
          }
          h1:hover {
            color: tomato;
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

      {/* <Link
              href="/character/[slug]"
              as={`/character/${slug(chr.name)}-${chr.id}`}
            ></Link> */}
      <h1>The Rick and Morty API</h1>
      <CardList data={characters.results} />
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
