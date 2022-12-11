import React from "react";
import styles from './layout.module.scss';
import { Red_Hat_Mono } from '@next/font/google'

const gf = Red_Hat_Mono({ weight: "300" })

export default function Header() {
  return (
    <header className={styles.header}>

      <nav className={[gf.className,styles.nav].join(' ')}>
        {["about", "posts", "photos", "videos"].map((label) => (
            <a  key={label}href={`/${label}`}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
