import React from 'react'
import styles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    variant?: 'primary'|'secondary',
    showIcon?: boolean;
}

export const Button = ({variant, showIcon, children, ...props}:IButtonProps) => {
  return (
    <button
        className={styles[variant ? variant : 'primary']} 
        {...props}>{children}</button>
  )
}

export default Button;
