import { NavLink, useLocation } from "react-router-dom"
import styles from './profile-nav.module.css'
import { useAppDispatch } from "../../../types/hooks"
import { logout } from "../../../services/actions/user"

const ProfileNav = () => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()

  const match = (to:string) => {
    return to === pathname
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={styles.profile_left_side}>
      <nav className={styles.profile_nav}>
        <NavLink 
          to='/profile'
          className={
            `${match('/profile') ? `text_color_primary` : `text_color_inactive`} ${styles.nav_button} text_type_main-medium `
          }
        >
          Профиль
        </NavLink>
        <NavLink 
          to='/profile/orders'
          className={({ isActive }) =>
          `${isActive ? `text_color_primary` : `text_color_inactive`} ${styles.nav_button} text_type_main-medium`
          }
        >
          История заказов
        </NavLink>
        <button 
          className={`${styles.logout_button} text text_center text_type_main-medium text_color_inactive`}
          onClick={handleLogout}
        >
          Выход
        </button>
      </nav>
      {pathname === '/profile' ? 
        <p className={`text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете <br/>изменить свои персональные данные
        </p>
        :
        <p className={`text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      }
    </div>
  )
}

export default ProfileNav