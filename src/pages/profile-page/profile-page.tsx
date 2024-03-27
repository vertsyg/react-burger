import { Outlet } from "react-router-dom"
import ProfileNav from "../../components/profle/profile-nav/profile-nav"

import styles from './profile-page.module.css'

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <ProfileNav/>
      <Outlet/>
    </div>
  )
}

export default ProfilePage