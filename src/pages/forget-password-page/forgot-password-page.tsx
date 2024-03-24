import styles from './forgot-password-page.module.css'
import { useState } from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { forgotPasswordRequest } from '../../utils/api';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const submit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: добавить логику
    const response = await forgotPasswordRequest(email)
    console.log(response.success)
    if (response.success) {
      navigate('/reset-password')
    }
  }

  return (
    <div className={styles.forgot_password_container}>
      <h2  className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form className={`${styles.forgot_password_form} mb-20`} onSubmit={submit}>
        <EmailInput
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
          htmlType='submit' 
          type='primary'
          style={{width: '40%', margin: '0 auto'}}
        >
          Восстановить
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4'>
        Вспомнили пароль? <Link to='/login' className={styles.forgot_password_link}>Войти</Link>
      </p>
    </div>
  )
}

export default ForgotPasswordPage