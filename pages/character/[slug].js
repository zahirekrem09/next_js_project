import Layout from "../components/Layout";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";
import slug from "slug";

function Detail({ character }) {
  const router = useRouter()
  const {params} = router
console.log(params);
  return (
    <Layout title="Detail">
      <div>
        <div>{character.name}</div>
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await unfetch("https://rickandmortyapi.com/api/character/");

  const data = await res.json();
  return {
    paths: data?.results?.map((chr) => {
      return {
        params: { slug: `${slug(chr.name)}-${chr.id}` },
      };
    }),
    fallback: false,
    // [{ params: { id: "1" } }, { params: { id: "2" } }],
  };
}

export async function getStaticProps({ params }) {
  // data fetch server tarafında calışıyor:

  const id = params.slug.split("-").slice(-1)[0];

  const res = await unfetch("https://rickandmortyapi.com/api/character/" + id);

  const data = await res.json();
  // console.log(data);

  return {
    props: {
      character: data,
    },
  };
}

export default Detail;
