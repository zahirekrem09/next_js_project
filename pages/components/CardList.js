import React from "react";
import Link from "next/link";
import styles from "./card.module.css";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <section className={styles.showcaseWrapper}>
      <div className={styles.showcaseInner}>
        {data?.map((chr) => (
          <Card key={chr.id} chr={chr} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
