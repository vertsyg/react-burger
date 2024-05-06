import img from '../../../images/done.svg';
import styles from './order-details.module.css';
import { getBurgerOrderNumber, getOrderLoading } from '../../../services/selectors';
import { useAppSelector } from '../../../types/hooks';

const OrderDetails = () => {
  const number = useAppSelector(getBurgerOrderNumber)
  const loading = useAppSelector(getOrderLoading)

  return (
    <>
      {
        loading ? (
          <p>Загрузка</p>
        ) : (
          <>
            <p className="neon text text_type_digits-large mb-10">{number}</p>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <img src={img} alt='done' className="mt-10 mb-10"/>
            <p className="text text_type_main-small mb-3">Ваш заказ начали готовить</p>
            <p className="text text_type_main-small text_color_inactive">
              Дождитесь готовности на орбитальной станции
            </p>
          </>
        )
      }
    </>
  )
}

export default OrderDetails