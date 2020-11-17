import React from "react";
import Link from "next/link";
import styles from "./card.module.css";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <section class={styles.showcaseWrapper}>
      <div class={styles.showcaseInner}>
        {data?.map((chr) => (
          <Card chr={chr} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
