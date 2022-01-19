import { FC, ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

type ButtonVariant = {
    color?: 'englishViolet' | 'independence'| 'magicMint' | 'orangeYellow' | 'mauve'
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariant

const Button:FC<ButtonProps> = ({ children, className, color, ...buttonProps }) => {
    let buttonClass = styles.root
    if (!!className) buttonClass = `${buttonClass} ${className}`

    switch (color) {
        case 'englishViolet':
            buttonClass = `${buttonClass} ${styles.backgroundEnglishViolet}`
            break;
        case 'independence':
            buttonClass = `${buttonClass} ${styles.backgroundIndependence}`
            break;
        case 'magicMint':
            buttonClass = `${buttonClass} ${styles.backgroundMagicMint}`
            break;
        case 'orangeYellow':
            buttonClass = `${buttonClass} ${styles.backgroundOrangeYellow}`
            break;
        case 'mauve':
            buttonClass = `${buttonClass} ${styles.backgroundMauve}`
            break;  
        default:
            buttonClass = `${buttonClass} ${styles.backgroundMagicMint}`
            break;
    }

    return (
        <button className={buttonClass} {...buttonProps}>
            {children}
        </button>
    )
}

export default Button