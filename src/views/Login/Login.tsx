import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Login.module.scss'

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

}

const Login = () => {
    const { t } = useTranslation()
    const usernameLabel = t('username')
    const passwordLabel = t('password')
    const submitText = t('submit')

    return (
        <div className={styles.root}>
            <form onSubmit={onSubmit}>
                <label htmlFor={usernameLabel} hidden>{usernameLabel}</label>
                <input type={'text'} name={usernameLabel} placeholder={usernameLabel} />
                <label htmlFor={'password'} hidden>{passwordLabel}</label>
                <input type={'text'} name={passwordLabel} placeholder={passwordLabel} />
                <input type={'submit'} value={submitText} />
            </form>
        </div>
    )
}

export default Login