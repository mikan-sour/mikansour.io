import React from 'react'
import styles from './input.module.scss';
interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export default function TextInput({...props}:ITextInputProps) {
  return (
    <input {...props} className={styles.input}/>
  )
}
