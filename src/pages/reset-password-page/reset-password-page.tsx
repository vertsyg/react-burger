import { useState } from 'react'
import styles from './reset-password-page.module.css'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { resetPasswordRequest } from '../../utils/api'

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const submit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: добавить логику
    console.log(password, token)
    resetPasswordRequest(password, token).then(result => console.log(result))
  }

  return (
    <div className={styles.reset_password_container}>
      <h2  className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form className={`${styles.reset_password_form} mb-20`} onSubmit={submit}>
        <PasswordInput
          placeholder='Введите новый пароль'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder='Введите код из письма'
          value={token} 
          onChange={(e) => setToken(e.target.value)}
        />
        <Button 
          htmlType='submit' 
          type='primary'
          style={{width: '40%', margin: '0 auto'}}
        >
          Сохранить
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4'>
        Вспомнили пароль? <Link to='/login' className={styles.reset_password_link}>Войти</Link>
      </p>
    </div>
  )
}


export default ResetPasswordPage