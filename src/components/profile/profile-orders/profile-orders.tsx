import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';
import styles from './profile-orders.module.css';
import { WS_PROFILE_ORDERS_CLOSE, WS_PROFILE_ORDERS_INIT } from '../../../services/actions/web-socket';
import { WS_BASE_URL } from '../../../utils/api';
import { getProfileOrders } from '../../../services/selectors';
import { Link, useLocation } from 'react-router-dom';
import FeedOrderItem from '../../feed-orders/feed-order-item/feed-order-item';

const ProfileOrders = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector(getProfileOrders)
  let location = useLocation()

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
      {orders ? 
        orders.map((order) => 
          <Link
            key={order.number}
            to={`/profile/orders/${order.number}`}
            state={{ backgroundLocation : location}}
            className={styles.link}
          >
            <FeedOrderItem
              ingredients={order.ingredients}
              status={order.status}
              number={order.number}
              createdAt={order.createdAt}
              updatedAt={order.updatedAt}
              name={order.name}
              _id = {order._id}
              />
          </Link>
        ) : <p>Загрузка...</p>     
      }
    </div>
  )
}

export default ProfileOrders