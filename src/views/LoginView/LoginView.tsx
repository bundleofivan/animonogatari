import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'store'
import { setUsername, setPassword } from 'store/actions/auth'
import Button from 'components/Button'
import { login } from 'store/actions/auth'

import styles from './LoginView.module.scss'

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
    const dispatch = useDispatch()
    const { inputUsername, inputPassword } = useAppSelector(state => state.auth)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(login())
    }
    const usernameLabel = t('username')
    const passwordLabel = t('password')
    const loginText = t('login')
    const showPasswordText = t('showPassword')
    const hidePasswordText = t('hidePassword')

    return (
        <section className={styles.root}>
            <Banner />
            <div>
                <form className={styles.form} onSubmit={onSubmit}>
                    {/* TODO: make label + input combo a component */}
                    <label htmlFor={usernameLabel} hidden>{usernameLabel}</label>
                    <input className={styles.input} type={'text'} name={usernameLabel} placeholder={usernameLabel} value={inputUsername} onChange={(e) => dispatch(setUsername(e.target.value))} />
                    <label htmlFor={'password'} hidden>{passwordLabel}</label>
                    <input className={styles.input} type={!!showPassword ? 'text' : 'password'} name={passwordLabel} placeholder={passwordLabel} value={inputPassword} onChange={(e) => dispatch(setPassword(e.target.value))} />

                    <Button className={styles.passwordTextToggle} color={'mauve'} type={'button'} onClick={() => setShowPassword(!showPassword)}>{!!showPassword ? hidePasswordText : showPasswordText}</Button>
                    <Button type={'submit'}>{loginText}</Button>

                </form>
            </div>
        </section>
    )
}

export default LoginView