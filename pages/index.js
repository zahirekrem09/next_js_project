import Layout from "./components/Layout";

function HomePage() {
  return (
    <Layout title="Home">
      {/* scope css */}
      <style jsx>
        {`
          h1 {
            color: white;
          }
        `}
      </style>
      {/* global css */}
      <style global jsx>
        {`
          body {
            background-color: green;
          }
        `}
      </style>
      <h1>Welcome to Next.js!</h1>
    </Layout>
  );
}

export default HomePage;
