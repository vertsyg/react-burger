import { useSelector } from 'react-redux'
import img from '../../../images/done.svg'
import styles from './order-details.module.css'
import { getBurgerOrderNumber } from '../../../services/selectors'

const OrderDetails = () => {
  const number = useSelector(getBurgerOrderNumber)
  
  return (
    <>
      <p className={`${styles.neon} text text_type_digits-large mb-10`}>{number}</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img src={img} alt='done' className="mt-10 mb-10"/>
      <p className="text text_type_main-small mb-3">Ваш заказ начали готовить</p>
      <p className="text text_type_main-small text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails