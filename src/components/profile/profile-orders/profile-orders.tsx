import { useEffect } from 'react';
import { useAppDispatch } from '../../../types/hooks';
import styles from './profile-orders.module.css';
import { WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_INIT } from '../../../services/actions/web-socket';
import { WS_BASE_URL } from '../../../utils/api';

const ProfileOrders = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({
      type: WS_PROFILE_ORDERS_INIT,
      payload: `${WS_BASE_URL}?token=${localStorage.getItem('accessToken')?.split('Bearer ').join('')}`
    })

    
    return () => {
      dispatch({
        type: WS_PROFILE_ORDERS_CLOSE
      })
    }
  }, [dispatch])

  return (
    <div className={styles.profileOrders}>
      <p>Здесь будет история заказов</p>
    </div>
  )
}

export default ProfileOrders