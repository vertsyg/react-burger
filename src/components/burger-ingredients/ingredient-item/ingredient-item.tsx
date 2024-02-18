import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-item.module.css'

export interface BurgerIngredientsItemProps {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number
}

const IngredientItem = ({name, price, image}: BurgerIngredientsItemProps) => {
  return (
    <div className={styles.ingredient_item}>
      <img src={image} alt={name}/>
      <div className={styles.ingredient_price}>
        {price}
        <CurrencyIcon type={'primary'}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default IngredientItem