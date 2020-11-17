import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import styles from "./navbar.module.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href="/">
          <a className="link">
            {" "}
            <Logo />
          </a>
        </Link>
        <div className={styles.searchbar}>
          <Search />
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.right}>
          <Link href="/about">
            <a className="link">About</a>
          </Link>
          <Link href="/">
            <a className="link">Home</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
