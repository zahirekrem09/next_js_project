import React from "react";
import Link from "next/link";
import slug from "slug";
import styles from "./card.module.css";

const Card = ({ chr }) => {
  return (
    <article className={styles.characterCardWrapper}>
      <div className={styles.characterCardImgWrapper}>
        <img src={chr?.image} alt={chr?.name} />
      </div>
      <div className={styles.characterCardContentWrapper}>
        <div className={styles.section}>
          <a
            href={chr?.url}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            <Link
              href="/character/[slug]"
              as={`/character/${slug(chr.name)}-${chr.id}`}
            >
              <a className={styles.link}>
                <h2 className="">{chr?.name}</h2>
              </a>
            </Link>
          </a>
          <span className="styles.status">
            <span className="styles.statusicon"></span>
            {chr?.status}-{chr?.species}
          </span>
        </div>
        <div className={styles.section}>
          <span className={styles.textgray}>Last known location:</span>
          <a
            href={chr?.location.url}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            {chr?.location.name}
          </a>
        </div>
        {/* <div className={styles.section}>
          <span className={styles.textgray}>First seen in:</span>
          <a
            href="https://rickandmortyapi.com/api/episode/25"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            Vindicators 3: The Return of Worldender
          </a>
        </div> */}
      </div>

      {/* <Link
              href="/character/[slug]"
              as={`/character/${slug(chr.name)}-${chr.id}`}
            ></Link> */}
    </article>
  );
};

export default Card;
