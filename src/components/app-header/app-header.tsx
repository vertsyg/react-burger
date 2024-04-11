import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import HeaderButton from './header-button/header-button';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../types/hooks';
import { getIsAuth, getUserName } from '../../services/selectors';

const AppHeader = () => {
  const isAuth = useAppSelector(getIsAuth)
  const userName = useAppSelector(getUserName)

  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <ul className={styles.header_buttons}>
          <li>
            <HeaderButton 
              path='/'
              icon={BurgerIcon} 
              text='Конструктор' 
            />
          </li>
          <li>
            <HeaderButton 
              path='/feed'
              icon={ListIcon} 
              text='Лента заказов' 
            />
          </li>
        </ul>
        <Link to='/'>
          <Logo/>
        </Link>
        <HeaderButton 
          path='/profile'
          icon={ProfileIcon} 
          text={isAuth ? userName : 'Личный кабинет'} 
        />
      </nav>
    </header>
  )
}

export default AppHeader