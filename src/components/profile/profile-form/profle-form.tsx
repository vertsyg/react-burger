import { FormEvent, useEffect, useState } from 'react';
import styles from './profile-form.module.css';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';
import { updateUserInfo } from '../../../services/actions/user';
import { getUserEmail, getUserName } from '../../../services/selectors';

const ProfileForm = () => {
  const userName = useAppSelector(getUserName)
  const userEmail = useAppSelector(getUserEmail)

  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    setName(userName)
    setEmail(userEmail)
  }, [userName, userEmail])

  const handleCancel = () => {
    setName(userName)
    setEmail(userEmail)
    setPassword('')
  }

  const handleUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(updateUserInfo(name, email, password))
  }

  return (
    <form className={styles.profile_form} onSubmit={handleUpdate}>
      <Input
        placeholder={'Имя'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon="EditIcon"
        extraClass="mb-2"
      />
      <EmailInput
        placeholder={'Логин'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isIcon={ true }
        extraClass="mb-2"
      />
      <PasswordInput
        placeholder={'Пароль'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        extraClass="mb-2"
      />
      <div className={styles.buttons}>
        <Button 
          htmlType='submit' 
          type='secondary'
          onClick={ handleCancel }
        >
          Отменить
        </Button>
        <Button 
          htmlType='submit' 
          type='primary'
        >
          Сохранить
        </Button>
      </div>
    </form>
  )
}

export default ProfileForm
