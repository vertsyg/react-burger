import { useParams } from "react-router-dom"
import styles from "./feed-orders-modal.module.css"
import { useAppSelector } from "../../../types/hooks"
import { getBurgerIngredients, getSelectedOrder } from "../../../services/selectors"
import { useEffect, useState } from "react"
import { OrderInfo } from "../../../services/reducers/web-socket-reducer"
import { request } from "../../../utils/api"
import { orderStatusObj } from "../../../types/actions/order"
import OrderModalIngredient from "./order-modal-ingredient/order-modal-ingredient"
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"

const FeedOrdersModal = () => {
  const { number } = useParams()

  const selectedOrder = useAppSelector(getSelectedOrder)
  const [currentItem, setCurrentItem] = useState<OrderInfo | null>(null)
  const allIngredients = useAppSelector(getBurgerIngredients)
  
  useEffect(() => {
    const findOrder = async () => {
      const order = await request(`orders/${number}`).then(data => data.orders[0])
      setCurrentItem(order)
    }
      findOrder()
  }, [number])

  const renderOrderModal = (order: OrderInfo) => {
    const { number, name, status, ingredients, createdAt } = order

    const totalPrice = ingredients.map(ingredient => {
      const orderIngredient = allIngredients.find(ingr => ingr._id === ingredient)
      return orderIngredient ? orderIngredient.price : 0
    }).reduce((acc, curr) => acc + curr, 0)

    const orderStatus = status as keyof typeof orderStatusObj

    let ingredientCountMap = ingredients.reduce<{[key: string] : number}>((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const uniqueIds = Object.keys(ingredientCountMap) 

    return (
      <div className={selectedOrder ? '' : styles.modal}>
        <h3>#{number}</h3>
        <div className={styles.right}>
          <h2 className='text text_type_main-medium mt-8'>{name}</h2>
          <p className={`text mt-3 ${orderStatus === 'done' ? 'text_color_success' : ''}`}>
            {orderStatusObj[orderStatus]}
          </p>
        </div>
        <p className='text text_type_main-medium mt-4'>Состав:</p>
        <div className={styles.order_modal_ingredients}>
          {uniqueIds.map(id => (
            <OrderModalIngredient key={id} id={id} count={ingredientCountMap[id]}/>
          ))}
        </div>
        <div className={styles.modal_footer}>
          <FormattedDate
            className='text text_type_main-default text_color_inactive' 
            date={new Date(createdAt)}
          />
          <div className={styles.total_price}>
            {totalPrice}
            <CurrencyIcon type={'primary'}/>
          </div>
        </div>
      </div>
    )
  }

  if (selectedOrder) {
    return renderOrderModal(selectedOrder)
  } else if (currentItem) {
    return renderOrderModal(currentItem)
  } else if (currentItem === undefined) {
    return (
      <p className="text text_type_main-large">Заказ не найден</p>
    )
  } else {
    return (
      <p className="text text_type_main-large">Загрузка...</p>
    )
  } 
}

export default FeedOrdersModal