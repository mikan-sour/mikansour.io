import React from 'react'
import Header from './header'
import Footer from './footer'
import styles from './layout.module.scss';

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className={styles.wrapper}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
