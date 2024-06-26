import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderInfo } from "../../../services/reducers/ws-feed-reducer";
import { getBurgerIngredients } from "../../../services/selectors";
import { useAppDispatch, useAppSelector } from "../../../types/hooks";

import styles from './feed-order-item.module.css'
import { openWsOrderModal } from "../../../services/actions/ingredients";
import { orderStatusObj } from "../../../types/actions/order";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const FeedOrderItem = (order : OrderInfo) => {
  const dispatch = useAppDispatch()
  const allIngredients = useAppSelector(getBurgerIngredients)
  const orderIngredients = order.ingredients
  const visibleIngredients = orderIngredients.slice(0,6)
  const invisibleIngredientsCount = orderIngredients.length - visibleIngredients.length

  const orderStatus = order.status as keyof typeof orderStatusObj
  const location = useLocation()

  const totalPrice = useMemo(() => {
    return orderIngredients.map(ingredient => {
      const orderIngredient = allIngredients.find(ingr => ingr._id === ingredient)
      return orderIngredient ? orderIngredient.price : 0
    }).reduce((acc, curr) => acc + curr, 0)
  }, [orderIngredients, allIngredients])

  const findIngredientImage = (ingredient : string) => {
    const orderIngredient = allIngredients.find(i => i._id === ingredient)
    return orderIngredient?.image_mobile
  }

  const openOrderModal = () => {
    dispatch(openWsOrderModal(order))
  }

  return (
    <div className={styles.order_item} onClick={openOrderModal}>
      <div className={styles.order_item_header}>
        <p className='text text_type_main-default'>#{order.number}</p>
        <FormattedDate 
          className='text text_type_main-default text_color_inactive' 
          date={new Date(order.createdAt)}
        />
      </div>
      <p className='text text_type_main-medium'>{order.name}</p>
      {
        location.pathname === '/profile/orders' && 
        <p className={`text mt-3 ${orderStatus === 'done' ? 'text_color_success' : ''}`}>
          {orderStatusObj[orderStatus]}
        </p>
      }
      <div className={styles.order_item_footer}>
        <div className={styles.order_item_ingredients}>
          {visibleIngredients.map((ingredient, index) => {
            const img = findIngredientImage(ingredient)
            if (img) {
              return (
                <div key={index} className={styles.ingredient_wrapper}>
                  {invisibleIngredientsCount > 0 && index === 5 && (
                    <div className={styles.count} style={{zIndex: 6}}>+{invisibleIngredientsCount}</div>
                  )}
                  <img 
                    className={`${styles.order_item_img} ${index === 5 && invisibleIngredientsCount ? styles.more : ''}`}
                    style={{zIndex: 0 - index}}
                    src={img}
                    alt={img}
                  />
                </div>
              )
            }
          })}
        </div>
        <div className={styles.order_price}>
          {totalPrice}
          <CurrencyIcon type={'primary'}/>
        </div>
      </div>
    </div>
  )
}

export default FeedOrderItem