import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import HeaderButton from './header-button/header-button'
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <header className={styles.wrapper}>
      <nav className={styles.container}>
        <ul className={styles.header_buttons}>
          <li>
            <HeaderButton icon={BurgerIcon} text='Конструктор' isActive={true}/>
          </li>
          <li>
            <HeaderButton icon={ListIcon} text='Лента заказов' isActive={false}/>
          </li>
        </ul>
        <Link to='/'>
          <Logo/>
        </Link>
        <HeaderButton icon={ProfileIcon} text='Личный кабинет' isActive={false}/>
      </nav>
    </header>
  )
}

export default AppHeader