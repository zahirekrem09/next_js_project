import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        <Link href="/">
          <a className="link">Home</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
