import React from 'react'
import { GetStaticProps,InferGetStaticPropsType } from 'next'

import Layout from '../../components/layout'
import { getSortedPostsData } from '../../utils/posts';
import { TPost } from '../../types';
import PostListItem from '../../components/molecules/PostListItem';

import styles from './posts.module.scss';
import PostSearch from '../../components/molecules/PostSearch';

export const getStaticProps: GetStaticProps<{ posts: TPost[] }> = async () => {
  const posts: TPost[] = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}

export default function Posts({ posts }:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <section>
          <header>
            <PostSearch onSearch={function (): void {
              alert('Function not implemented.');
            } }/>
          </header>
          <h1 className={styles.title}>Articles</h1>
        </section>
        {posts.map(post => <PostListItem key={post.id} {...post}/>)}
      </div>
    </Layout>
  )
}

