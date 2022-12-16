import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

import styles from "./layout.module.scss";
import { Red_Hat_Mono } from '@next/font/google'

const gf = Red_Hat_Mono({ weight: "300", subsets:['latin-ext','latin'] })

const options = ["home","about", "posts", "photos", "videos"];

export function Header() {
  const { pathname } = useRouter();
  const classes = (str: string) => {
    return pathname.substring(1) === str
      ? [styles.link, styles.selected].join(" ")
      : [styles.link].join(" ");
  };
  return (
    <section className={styles.navWrapper}>
      <nav className={styles.navBasic}>
        {options.map((label) => (
          <Link key={label} href={label !== 'home' ? `/${label}` : '/'} className={classes(label)}>
            {label}
          </Link>
        ))}
      </nav>
      <h1 className={[gf.className, styles.vertical].join(" ")}>蜜柑サワー</h1>
      <p>mikansour.dev &#169;2022</p>
    </section>
  );
}
