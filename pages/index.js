import { useEffect, useState } from "react";
import useSWR from "swr";

import Layout from "./components/Layout";
import unfetch from "isomorphic-unfetch";

import CardList from "./components/CardList";

const API_URL = "https://rickandmortyapi.com/api/character/?page=";
async function fetcher(page = 1) {
  const res = await fetch(API_URL + page);
  const json = await res.json();
  return json;
}

function HomePage({ characters }) {
  const [page, setPage] = useState(1);

  const { data, error } = useSWR(page, fetcher);
  const [dataList, setDataList] = useState([]);

  // useEffect(() => {
  //   setDataList([...dataList, data.results]);
  // }, []);

  const more = () => {
    null;
  };
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
      <CardList data={data?.results} more={more} />

      <button onClick={() => setPage(page + 1)}>load More </button>
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
