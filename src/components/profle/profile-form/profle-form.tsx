import { useRef, useState } from 'react'
import styles from './profile-form.module.css'
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

const ProfileForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleCancel = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleUpdate = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: добавить логику
    console.log('обновление данных')
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
      <Button 
        htmlType='submit' 
        type='primary'
        extraClass='mr-6'
        style={{width: '24%'}}
      >
        Сохранить
      </Button>
      <Button 
        htmlType='submit' 
        type='primary'
        style={{width: '24%'}}
        onClick={ handleCancel }
      >
        Отмена
      </Button>
    </form>
  )
}

export default ProfileForm
