import { useMemo } from 'react'
import { getFeedOrders, getFeedOrdersTotal, getFeedOrdersTotalToday } from '../../services/selectors'
import { useAppSelector } from '../../types/hooks'
import styles from './feed-orders-info.module.css'

const FeedOrdersInfo = () => {
  const feedOrders = useAppSelector(getFeedOrders)
  const total = useAppSelector(getFeedOrdersTotal)
  const totalToday = useAppSelector(getFeedOrdersTotalToday)

  const doneOrders = useMemo(() => {
    return feedOrders
      .filter(order => order.status === 'done')
      .splice(0,15)
      .map(order => order.number)
  }, [feedOrders])

  const otherOrders = useMemo(() => {
    return feedOrders
      .filter(order => order.status !== 'done')
      .splice(0,15)
      .map(order => order.number)    
  }, [feedOrders])

  return (
    <section>
      <div className={styles.orders_status_container}>
        <div className={styles.order_status}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <div className={styles.order_numbers}>
            {doneOrders.map(number => (
              <p className="text_type_digits-default text_color_success mb-2" key={number}>{number}</p>
            ))}
          </div>
        </div>
        <div className={styles.order_status}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <div className={styles.order_numbers}>
            {otherOrders.map(number => (
              <p className="text_type_digits-default mb-2" key={number}>{number}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.total}>
        <p className='text text_type_main-medium'>Выполнено за все время:</p>
        <p className='neon text text_type_digits-large'>{total}</p>
      </div>
      <div className={styles.total}>
        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
        <p className='neon text text_type_digits-large'>{totalToday}</p>
      </div>
    </section>
  )
}

export default FeedOrdersInfo