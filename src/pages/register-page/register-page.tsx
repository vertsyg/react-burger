import { useState } from 'react';
import styles from './register-page.module.css';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../types/hooks';
import { register } from '../../services/actions/user';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch()

  const submit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(register(email, password, name))
  }

  return (
    <div className={styles.register_container}>
      <h2  className="text text_type_main-medium mb-6">Регистрация</h2>
      <form className={`${styles.register_form} mb-20`} onSubmit={submit}>
        <Input
          placeholder='Имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          style={{width: '55%', margin: '0 auto'}}
        >
          Зарегестрироваться
        </Button>
      </form>
      <p className='text text_type_main-default text_color_inactive mb-4'>
        Уже зарегестрированы? <Link to='/login' className={styles.login_link}>Войти</Link>
      </p>
    </div>
  )
}

export default RegisterPage