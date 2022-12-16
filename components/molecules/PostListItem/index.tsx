import React from 'react'
import styles from './postListItem.module.scss';
import Link from 'next/link'
import { TPost } from '../../../types'
import Label from '../../atoms/label';

export default function PostListItem({id, title, date, desc,labels}:TPost) {

  return (
    <Link href={`/posts/${id}`} style={{textDecoration:'none'}}>
    <section className={styles.container}>
      <h1 >{title}</h1>
      <section className={styles.tagList}>
        {labels.map(l => <Label label={l.toLocaleLowerCase()} key={l}/>)}
      </section>
      <h6>{date}</h6>
      <p>{desc}</p>
    </section>
    </Link>
    
  )
}
