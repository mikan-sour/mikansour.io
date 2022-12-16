import React from 'react'
import styles from './label.module.scss';

import getColor from './labelColors';

export default function Label({label}:{label:string}) {
  const css = getColor(label)
  return (
    <div className={styles.label} style={css}>{label}</div>
  )
}
