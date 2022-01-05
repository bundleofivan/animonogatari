import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import Button from 'components/Button'

import styles from './Login.module.scss'

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('clicked submit')
}

const Login = () => {
    const { t } = useTranslation()
    const usernameLabel = t('username')
    const passwordLabel = t('password')
    const loginText = t('login')

    return (
        <div className={styles.root}>
            <form className={styles.form} onSubmit={onSubmit}>
                <label htmlFor={usernameLabel} hidden>{usernameLabel}</label>
                <input className={styles.input} type={'text'} name={usernameLabel} placeholder={usernameLabel} />
                <label htmlFor={'password'} hidden>{passwordLabel}</label>
                <input className={styles.input} type={'text'} name={passwordLabel} placeholder={passwordLabel} />
                <Button type={'submit'}>{loginText}</Button>
            </form>
        </div>
    )
}

export default Login