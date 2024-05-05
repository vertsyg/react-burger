import styles from "./order-modal-ingredient.module.css"
import { getBurgerIngredients } from "../../../../services/selectors"
import { useAppSelector } from "../../../../types/hooks"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

const OrderModalIngredient = ({ id, count }: { id: string, count: number }) => {
  const allIngredients = useAppSelector(getBurgerIngredients)

  const findIngredientImage = (ingredient : string) => {
    const orderIngredient = allIngredients.find(i => i._id === ingredient)
    return orderIngredient?.image_mobile
  }

  const findIngredientName = (ingredient : string) => {
    const orderIngredient = allIngredients.find(i => i._id === ingredient)
    return orderIngredient?.name
  } 
  
  const findIngredientPrice = (ingredient : string) => {
    const orderIngredient = allIngredients.find(i => i._id === ingredient)
    return orderIngredient?.price
  }

  return (
    <div className={styles.ingredients}>
      <div className={styles.flex}>
        <img className={styles.ingredient_img} src={findIngredientImage(id)} alt={id}/>
        <p className='text text_type_main-default'>{findIngredientName(id)}</p>
      </div>
      <div className={styles.ingredient_price}>
        {count} X {findIngredientPrice(id)}
        <CurrencyIcon type={'primary'}/>
      </div>
    </div>
  )
}

export default OrderModalIngredient