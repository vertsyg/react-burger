import { Link, useLocation } from 'react-router-dom'
import { getFeedOrders } from '../../services/selectors'
import { useAppSelector } from '../../types/hooks'
import FeedOrderItem from './feed-order-item/feed-order-item'
import styles from './feed-orders.module.css'

const FeedOrders = () => {

  const orders = useAppSelector(getFeedOrders)
  let location = useLocation()
  console.log(orders)

  return (
    <section className={styles.feed}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <div className={styles.feed_orders}>
        {orders.map((order) => 
          <Link 
            key={order.number}
            to={`/feed/${order.number}`}
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
        )}
      </div>
    </section>
  )
}

export default FeedOrders