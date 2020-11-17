import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div>
      {/* meta etiketlerini ayarlamak için */}
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>By eko</footer>
    </div>
  );
};

export default Layout;
