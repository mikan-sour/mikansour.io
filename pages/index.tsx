import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

import HomePic from '../public/images/home.webp'

export default function Home() {
  return (
      <Layout>
        <Image 
          className={styles.homeImage}
          src={HomePic} alt=''/>
      </Layout>
  )
}
