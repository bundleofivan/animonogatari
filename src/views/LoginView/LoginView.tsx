import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import Button from 'components/Button'

import styles from './LoginView.module.scss'

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('clicked submit')
}

const Banner = () => {
    const title = "Animonogatari"
    return (
        <div className={styles.banner}>
            {title}
        </div>
    )
}

const LoginView = () => {
    const { t } = useTranslation()
    const usernameLabel = t('username')
    const passwordLabel = t('password')
    const loginText = t('login')

    return (
        <section className={styles.root}>
            <Banner />
            <div>
                <form className={styles.form} onSubmit={onSubmit}>
                    <label htmlFor={usernameLabel} hidden>{usernameLabel}</label>
                    <input className={styles.input} type={'text'} name={usernameLabel} placeholder={usernameLabel} />
                    <label htmlFor={'password'} hidden>{passwordLabel}</label>
                    <input className={styles.input} type={'text'} name={passwordLabel} placeholder={passwordLabel} />
                    <Button type={'submit'}>{loginText}</Button>
                </form>
            </div>
        </section>
    )
}

export default LoginView