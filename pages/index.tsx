import Head from 'next/head'
import Image from 'next/image'
import { Zen_Maru_Gothic } from '@next/font/google'

import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

import HomePic from '../public/images/home.webp'

const nsj = Zen_Maru_Gothic({ weight: "300" })

export default function Home() {
  return (
      <Layout>
        <h1 className={[nsj.className, styles.vertical].join(' ')}>蜜柑サワー</h1>
        <Image 
          className={styles.homeImage}
          src={HomePic} alt=''/>
      </Layout>
  )
}
