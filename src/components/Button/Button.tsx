import { FC, ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({ children, ...buttonProps }) => {
    return (
        <button className={styles.root} {...buttonProps}>
            {children}
        </button>
    )
}

export default Button