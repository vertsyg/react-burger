import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './login-page.module.css';
import { useAppDispatch } from '../../types/hooks';
import { login } from '../../services/actions/user';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch() 

  const submit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(login(email,password))
  }

  return (
    <div className={styles.login_container}>
      <h2  className="text text_type_main-medium mb-6">Вход</h2>
      <form className={`${styles.login_form} mb-20`} onSubmit={submit}>
        <EmailInput 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          htmlType='submit' 
          type='primary' 
          style={{width: '40%', margin: '0 auto'}}
        >
          Войти
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4'>
        Вы — новый пользователь? <Link to='/register' className={styles.login_link}>Зарегестрироваться</Link>
      </p>
      <p className='text text_type_main-default text_color_inactive mb-4'>
        Забыли пароль? <Link to='/forgot-password' className={styles.login_link}>Восстановить пароль</Link>
      </p>
    </div>
  )
}

export default LoginPage