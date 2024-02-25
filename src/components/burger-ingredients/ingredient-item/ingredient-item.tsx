import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
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

interface IngredientItemProps {
  ingredient: BurgerIngredientsItemProps;
  handleClick: (ingredient: BurgerIngredientsItemProps) => void
}

const IngredientItem = ({ingredient, handleClick}: IngredientItemProps) => {
  const {name, price, image} = ingredient

  return (
    <div className={styles.ingredient_item} onClick={() => handleClick(ingredient)}>
      <Counter count={1}/>
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